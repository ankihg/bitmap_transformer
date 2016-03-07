'use strict';
require(__dirname + '/../gulpfile.js');

const EventEmitter = require('events').EventEmitter;
global.eventEmitter = new EventEmitter();

const fileManager = require(__dirname + '/fileManager');
const dataHandler = require(__dirname + '/dataHandler');
const transformer = require(__dirname + '/transformer');
const clController = require(__dirname + '/clController');

//defaults
global.rPath = '/media/palette-bitmap.bmp';
global.transform = transformer.invert;

//replaces defaults if given tags
clController.setTags();
global.eventEmitter.on('transform', global.transform);

fileManager.read(global.rPath, dataHandler.makeBitmapObj);
