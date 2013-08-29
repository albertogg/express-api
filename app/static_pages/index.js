var express = require('express')
  , app     = module.exports = express();

app.set('views', __dirname + '/views');

var controller = require('./controller');

app.get('/', controller.index);
