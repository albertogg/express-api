var express = require('express');
var app     = express();

var staticPages = require('./app/static_pages');
var users       = require('./app/users');

// Middleware calls.
// Order of middleware matters. the fist one is the most "important".
app.use(express.logger());
app.use(staticPages);
app.use(users);

var port    = process.env.PORT || 3000;
app.listen(port, bindPortToApp());

function bindPortToApp() {
  console.log("Listening on port: " + port);
};
