'use strict';
const fs = require('fs');

exports.read = function(rPath, makeDataObj) {
  return fs.readFile(__dirname + '/../' + rPath, function(err, data) {
    if (err) throw err;
    console.log(data);
    makeDataObj(data);
  });
};
