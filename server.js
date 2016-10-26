var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./src/routes/loader');

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/dist/views');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(morgan('dev'));

// Set a static files folder (css, images etc...)
app.use('/static', express.static('dist/static'));

app.use('/', routes);

app.listen(port);

console.log('Go Compare is running on localhost:'+port);
