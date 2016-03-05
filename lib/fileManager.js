'use strict';
const fs = require('fs');

exports.read = function(rPath) {
  fs.readFile(__dirname + '/../' + rPath, function(err, data) {
    if (err) throw err;
    global.eventEmitter.emit('makeBitmapObj', data);
  });
};

global.eventEmitter.on('write', function(bitmap) {
  fs.writeFile(__dirname + '/../media/new.bmp', bitmap, function(err) {
    if (err) throw err;
    console.log('bitmap transformation complete, check ur media folder');
  });
});
