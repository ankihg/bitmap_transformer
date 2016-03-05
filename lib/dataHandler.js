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
  bitmapObj.nPaletteColors = bitmap.readUInt32LE(46);


  if (bitmapObj.isPalette) {
    bitmapObj.colStart = 54;
    bitmapObj.colEnd = bitmapObj.colStart + bitmapObj.nPaletteColors;
  } else {
    bitmapObj.colStart = bitmapObj.pixelArrayStart;
    bitmapObj.colEnd = bitmapObj.colStart + (4 * bitmapObj.width * bitmapObj.height);
  }


  console.log(bitmapObj);
  global.eventEmitter.emit('transform', bitmapObj);
});
