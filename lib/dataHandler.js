'use strict';

var os = require('os');
var readUInt32;
if (os.endianness() === 'LE') {
  readUInt32 = Buffer.prototype.readUInt32LE;
} else {
  readUInt32 = Buffer.prototype.bitmap.readUInt32BE;
}

global.eventEmitter.on('makeBitmapObj', exports.makeBitmapObj = function(bitmap) {

  var bitmapObj = {};

  bitmapObj.bitmap = bitmap;

  bitmapObj.headerField = bitmap.toString('ascii', 0, 2);
  bitmapObj.size = readUInt32.call(bitmap, 2);

  bitmapObj.width = bitmap[18];
  bitmapObj.height = bitmap[22];

  bitmapObj.pixelArrayStart = readUInt32.call(bitmap, 10);

  bitmapObj.isPalette = bitmapObj.pixelArrayStart > 54;
  bitmapObj.nPaletteColors = readUInt32.call(bitmap, 46);


  if (bitmapObj.isPalette) {
    bitmapObj.colStart = 54;
    bitmapObj.colEnd = bitmapObj.colStart + bitmapObj.nPaletteColors;
  } else {
    bitmapObj.colStart = bitmapObj.pixelArrayStart;
    bitmapObj.colEnd = bitmapObj.colStart + (4 * bitmapObj.width * bitmapObj.height);
  }

  console.log(bitmapObj);
  global.eventEmitter.emit('transform', bitmapObj);
  return bitmapObj;
});
