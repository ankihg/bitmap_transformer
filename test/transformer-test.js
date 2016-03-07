'use strict';
const expect = require('chai').expect;
const EventEmitter = require('events').EventEmitter;
global.eventEmitter = new EventEmitter();
const transformer = require(__dirname + '/../lib/transformer');

describe('testing for transformer', function() {

  var bitmapObj;
  var shouldEqlBuf;

  beforeEach(function() {
    bitmapObj = {};
    bitmapObj.colStart = 0;
    bitmapObj.colEnd = 4;
    bitmapObj.bitmap = new Buffer(4);
    bitmapObj.bitmap[0] = 3;
    bitmapObj.bitmap[1] = 4;
    bitmapObj.bitmap[2] = 5;
    bitmapObj.bitmap[3] = 5;
  });

  it('should invert colors of bitmap', function(done) {
    shouldEqlBuf = new Buffer(4);
    shouldEqlBuf[0] = 252;
    shouldEqlBuf[1] = 251;
    shouldEqlBuf[2] = 250;
    shouldEqlBuf[3] = 5;

    var bitmap = transformer.invert(bitmapObj);
    expect(bitmap).eql(shouldEqlBuf);
    done();
  });

  it('should grayscale colors of bitmap', function(done) {
    shouldEqlBuf = new Buffer(4);
    shouldEqlBuf[0] = 4;
    shouldEqlBuf[1] = 4;
    shouldEqlBuf[2] = 4;
    shouldEqlBuf[3] = 5;

    var bitmap = transformer.grayscale(bitmapObj);
    expect(bitmap).eql(shouldEqlBuf);
    done();
  });

  it('should redscale colors of bitmap', function(done) {
    shouldEqlBuf = new Buffer(4);
    shouldEqlBuf[0] = 3;
    shouldEqlBuf[1] = 4;
    shouldEqlBuf[2] = 15;
    shouldEqlBuf[3] = 5;

    var bitmap = transformer.redscale(bitmapObj);
    expect(bitmap).eql(shouldEqlBuf);
    done();
  });

  it('should greenscale colors of bitmap', function(done) {
    shouldEqlBuf = new Buffer(4);
    shouldEqlBuf[0] = 3;
    shouldEqlBuf[1] = 12;
    shouldEqlBuf[2] = 5;
    shouldEqlBuf[3] = 5;

    var bitmap = transformer.greenscale(bitmapObj);
    expect(bitmap).eql(shouldEqlBuf);
    done();
  });

  it('should bluescale colors of bitmap', function(done) {
    shouldEqlBuf = new Buffer(4);
    shouldEqlBuf[0] = 9;
    shouldEqlBuf[1] = 4;
    shouldEqlBuf[2] = 5;
    shouldEqlBuf[3] = 5;

    var bitmap = transformer.bluescale(bitmapObj);
    expect(bitmap).eql(shouldEqlBuf);
    done();
  });

});
