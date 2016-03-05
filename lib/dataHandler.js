'use strict';

exports.makeBitmapObj = function(bitmap) {
  var bitmapObj = {};

  bitmapObj.headerField = bitmap.toString('ascii', 0, 2);
  bitmapObj.size = bitmap.readUInt32LE(2);

  bitmapObj.pixelArrayStart = bitmap.readUInt32LE(10);
  bitmapObj.isPalette = bitmapObj.pixelArrayStart > 54;

  bitmapObj.paletteColors = bitmap.readUInt32LE(46);

  console.log(bitmapObj);
};

global.eventEmitter.on('makeBitmapObj', exports.makeBitmapObj);
