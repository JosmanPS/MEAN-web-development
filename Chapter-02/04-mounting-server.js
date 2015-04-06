// Mounting connect middleware

// Mounting enables to determine which request path is required
// for the middleware function to get executed

var connect = require('connect');
var app = connect();


var logger = function(req, res, next) {
  console.log(req.method, req.url);

  // next middleware
  next();
};


var helloWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};


var goodbyeWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye World');
};


// Mounting the middlewares
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000);

console.log('Server running at http://localhost:3000/');
