var express = require('express');
var http = require('http');

var hostname = 'localhost'; var port = 3000;

var app = express();

app.use(function(req,res,next){
  console.log(req.headers);
  res.writeHead(200,{'content-Type':'text/html'});
  res.end('<html><body><h1>Hello, application built using express</h1></body></html>');
});

var server = http.createServer(app);

server.listen(port,hostname,function(){
  console.log('server running at '+hostname+':'+port);
});
