'use strict';
const expect = require('chai').expect;
const EventEmitter = require('events').EventEmitter;
global.eventEmitter = new EventEmitter();
const transformer = require(__dirname + '/../lib/transformer');

describe('testing for transformer', function() {

  var bitmapObj;
  var shouldEqlBuf;

  before(function() {
    bitmapObj = {};
    bitmapObj.colStart = 0;
    bitmapObj.colEnd = 4;
    bitmapObj.bitmap = new Buffer(4);
    bitmapObj.bitmap[0] = 5;
    bitmapObj.bitmap[1] = 5;
    bitmapObj.bitmap[2] = 5;
    bitmapObj.bitmap[3] = 5;
  });

  it('should invert colors of bitmap', function(done) {
    shouldEqlBuf = new Buffer(4);
    shouldEqlBuf[0] = 250;
    shouldEqlBuf[1] = 250;
    shouldEqlBuf[2] = 250;
    shouldEqlBuf[3] = 5;

    var bitmap = transformer.invert(bitmapObj);
    expect(bitmap).eql(shouldEqlBuf);
    done();
  });

});
