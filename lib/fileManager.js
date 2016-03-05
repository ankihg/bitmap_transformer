'use strict';
const fs = require('fs');

exports.read = function(rPath) {
  return fs.readFile(__dirname + '/../' + rPath, function(err, data) {
    if (err) throw err;
    global.eventEmitter.emit('makeBitmapObj', data);
  });
};
