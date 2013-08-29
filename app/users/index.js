var express = require('express')
  , resource = require('express-resource')
  , app     = module.exports = express();

app.set('views', __dirname + '/views');

var controller = require('./controller');

app.resource('users', controller);
