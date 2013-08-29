var express  = require('express')
  , app      = express();

var staticPages = require('./app/static_pages');
var users       = require('./app/users');

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

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
