'use strict';
const EventEmitter = require('events').EventEmitter;
global.eventEmitter = new EventEmitter();
const fileManager = require(__dirname + '/fileManager');
const dataHandler = require(__dirname + '/dataHandler');
const transformer = require(__dirname + '/transformer');

var rPath = '/media/non-palette-bitmap.bmp';
var transform;

fileManager.read(rPath, dataHandler.makeBitmapObj);
