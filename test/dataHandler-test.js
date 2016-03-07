'use strict';
const expect = require('chai').expect;
const EventEmitter = require('events').EventEmitter;
global.eventEmitter = new EventEmitter();
const dataHandler = require(__dirname + '/../lib/dataHandler');

describe('testing for dataHandler', function() {

  var bitmapObj;

  before(function(done) {
    var bitmapBuf = new Buffer(50);
    bitmapBuf[18] = 100;
    bitmapBuf[22] = 100;

    bitmapObj = dataHandler.makeBitmapObj(bitmapBuf);
    done();
  });

  it('should make bitmapObj from bitmapBuf', function(done) {
    expect(bitmapObj.width).eql(100);
    expect(bitmapObj.height).eql(100);
    done();
  });
});
