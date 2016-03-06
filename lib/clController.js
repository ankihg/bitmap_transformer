'use strict';

const transformer = require(__dirname + '/transformer');

//first transform, then path
exports.setTags =  function() {
  var args = process.argv.slice(2);
  if (args.length > 0) {
    var transformID = args[0];
    if (transformID === 'i') {
      global.transform = transformer.invert;
    } else if (transformID === 'gra') {
      global.transform = transformer.grayscale;
    } else if (transformID === 'r') {
      global.transform = transformer.redscale;
    } else if (transformID === 'grn') {
      global.transform = transformer.greenscale;
    } else if (transformID === 'b') {
      global.transform = transformer.bluescale;
    }
  }
  if (args.length > 1) {
    global.rPath = args[1];

  }
};
