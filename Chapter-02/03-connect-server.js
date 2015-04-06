var connect = require('connect');
var app = connect();


// Writing other middleware
var logger = function(req, res, next) {
  console.log(req.method, req.url);

  // next middleware
  next();
};


var helloWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};


// Register the middlewares
app.use(logger);
app.use(helloWorld);
app.listen(3000);

console.log('Server running at http://localhost:3000/');
