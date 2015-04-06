var http = require('http');


http.createServer(function(req, res) {
  // This function gets called whenever threre's an HTTP
  // request sent to the web server

  // Set the response HTTP headers
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // This method is used to finalize the response.
  // Takes a single string argument that it will use as the HTTP
  // response body
  res.end('Hello World');

}).listen(3000);


console.log('Server running at http://localhost:3000/');
