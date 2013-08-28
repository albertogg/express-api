var express = require('express');
var app     = module.exports = express();

var controller = require('./controller');

app.get('/', controller.index);
