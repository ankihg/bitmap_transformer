'use strict';

exports.invert = function(bitmapObj) {
  console.log('from transformer: ', bitmapObj);
  if (bitmapObj.isPalette) {
    var start = 54;
    var end = bitmapObj.pixelArrayStart;

    for (var i=start; i<end; i++) {
      bitmapObj.bitmap[i] = 255 - bitmapObj.bitmap[i];
    }

    console.log('performed inverserion');
  }

  global.eventEmitter.emit('write', bitmapObj.bitmap);
};

exports.grayscale = function() {

};

global.eventEmitter.on('transform', exports.invert);
