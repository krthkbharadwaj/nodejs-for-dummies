var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = '3000';

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',function(req,res,next){
  res.writeHead(200,{'content-Type':'text/plain'});
  next();
});

app.get('/dishes',function(req,res,next){
  res.end('Giving all the dishes details');
});

app.post('/dishes',function(req,res,next){
  res.end('Posting new content is not yet supported');
});

app.delete('/dishes',function(req,res,next){
  res.end('Deleting all the dishes');
});

app.get('/dishes/:dishId',function(req,res,next){
  res.end('Giving the information of'+req.params.dishId);
});

app.put('/dishes/:dishId',function(req,res,next){
  res.end('Updating the content'+req.params.dishId);
});

app.post('/dishes/:dishId',function(req,res,next){
  res.end('Creating the content, new name is '+req.body.name+' and the description is '+req.body.description);
});

app.listen(port,hostname,function(){
  console.log('Running http://'+hostname+':'+port);
});

