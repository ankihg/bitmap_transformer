'use strict';

exports.invert = function(bitmapObj) {
  console.log('from transformer: ', bitmapObj);


  for (var i=bitmapObj.colStart; i<bitmapObj.colEnd; i++) {
    bitmapObj.bitmap[i] = 255 - bitmapObj.bitmap[i];
  }

  console.log('performed inverserion');

  global.eventEmitter.emit('write', bitmapObj.bitmap);
};

exports.grayscale = function() {

};

global.eventEmitter.on('transform', exports.invert);
