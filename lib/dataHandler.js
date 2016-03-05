'use strict';

global.eventEmitter.on('makeBitmapObj', exports.makeBitmapObj = function(bitmap) {
  var bitmapObj = {};

  bitmapObj.bitmap = bitmap;

  bitmapObj.headerField = bitmap.toString('ascii', 0, 2);
  bitmapObj.size = bitmap.readUInt32LE(2);

  bitmapObj.width = bitmap[18];
  bitmapObj.height = bitmap[22];

  bitmapObj.pixelArrayStart = bitmap.readUInt32LE(10);

  bitmapObj.isPalette = bitmapObj.pixelArrayStart > 54;

  if (bitmapObj.isPalette) {
    bitmapObj.colStart = 54;
    bitmapObj.colEnd = bitmapObj.pixelArrayStart;
  } else {
    bitmapObj.colStart = bitmapObj.pixelArrayStart;
    bitmapObj.colEnd = 4 * bitmapObj.width * bitmapObj.height;
  }

  bitmapObj.paletteColors = bitmap.readUInt32LE(46);

  console.log(bitmapObj);
  global.eventEmitter.emit('transform', bitmapObj);
});
