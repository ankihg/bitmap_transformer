'use strict';
const fileManager = require(__dirname + '/fileManager');
const dataHandler = require(__dirname + '/dataHandler');

var rPath = '/media/palette-bitmap.bmp';
var transform;

var bitmap = fileManager.read(rPath, dataHandler.makeBitmapObj);
console.log(bitmap);
