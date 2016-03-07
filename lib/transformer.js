'use strict';

exports.invert = function(bitmapObj) {
  console.log('performing inversion');

  for (var i=bitmapObj.colStart; i<bitmapObj.colEnd; i=i+4) {
    bitmapObj.bitmap[i] = 255 - bitmapObj.bitmap[i];
    bitmapObj.bitmap[i+1] = 255 - bitmapObj.bitmap[i+1];
    bitmapObj.bitmap[i+2] = 255 - bitmapObj.bitmap[i+2];
  }

  global.eventEmitter.emit('write', bitmapObj.bitmap);
  return bitmapObj.bitmap;
};

exports.grayscale = function(bitmapObj) {
  console.log('performing grayscale');

  for (var i=bitmapObj.colStart; i<bitmapObj.colEnd; i=i+4) {
    var avg = (bitmapObj.bitmap[i] + bitmapObj.bitmap[i+1] + bitmapObj.bitmap[i+2])/3;

    bitmapObj.bitmap[i] = avg;
    bitmapObj.bitmap[i+1] = avg;
    bitmapObj.bitmap[i+2] = avg;
  }

  global.eventEmitter.emit('write', bitmapObj.bitmap);
  return bitmapObj.bitmap;
};

exports.redscale = function(bitmapObj) {
  console.log('performing redscale');

  for (var i=bitmapObj.colStart; i<bitmapObj.colEnd; i=i+4) {
    bitmapObj.bitmap[i+2] = Math.min(3*bitmapObj.bitmap[i+2], 255);
  }

  global.eventEmitter.emit('write', bitmapObj.bitmap);
  return bitmapObj.bitmap;
};

exports.greenscale = function(bitmapObj) {
  console.log('performing greenscale');

  for (var i=bitmapObj.colStart; i<bitmapObj.colEnd; i=i+4) {
    bitmapObj.bitmap[i+1] = Math.min(3*bitmapObj.bitmap[i+1], 255);
  }

  global.eventEmitter.emit('write', bitmapObj.bitmap);
  return bitmapObj.bitmap;
};

exports.bluescale = function(bitmapObj) {
  console.log('performing bluescale');

  for (var i=bitmapObj.colStart; i<bitmapObj.colEnd; i=i+4) {
    bitmapObj.bitmap[i] = Math.min(3*bitmapObj.bitmap[i], 255);
  }

  global.eventEmitter.emit('write', bitmapObj.bitmap);
  return bitmapObj.bitmap;
};
