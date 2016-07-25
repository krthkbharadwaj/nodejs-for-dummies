var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = '3000';

var server = http.createServer(function(req,res){
  if(req.method=='GET'){
    var fileUrl;

    if(req.url=='/'){ fileUrl='/index.html'; }
    else fileUrl = req.url;

    var filePath = path.resolve('./public'+fileUrl);
    var fileExt = path.extname(filePath);

    if(fileExt=='.html'){
      fs.exists(filePath,function(exists){
        if(!exists){
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<html><body><h1>Error: 404 '+fileUrl+' not found</h1></body></html>');
          return;
        }
        res.writeHead(200,{'content-Type':'text/html'});
        fs.createReadStream(filePath).pipe(res);
      });
    }else{
      res.writeHead(404,{'content-Type':'text/html'});
      res.end('<html><body><h1>Error: 404 '+fileUrl+' not found</h1></body></html>')
    }
  }else{
    res.writeHead(404,{'content-Type':'text/html'});
    res.end('<html><body><h1>Error: 404 '+fileUrl+' not found</h1></body></html>');
  }
})

server.listen(port,hostname,function(){
   console.log('server running at '+hostname+':'+port);
});
