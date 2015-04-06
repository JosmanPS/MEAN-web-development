var connect = require('connect');
var app = connect();


// Our first middleware
// Arguments always are req, res, next
var helloWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};


// Register the middleware
app.use(helloWorld);
app.listen(3000);

console.log('Server running at http://localhost:3000/');
