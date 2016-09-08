var http = require('http');
var url = require('url');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});

function accept(req, res) { 
      file.serve(req, res);
}

http.createServer(accept).listen(8080);

console.log('hello from port 8080');