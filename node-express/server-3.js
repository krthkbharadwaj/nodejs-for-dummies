var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = '3000';

var app = express();

app.use(morgan('dev'));

var dishRoute = express.Router();

dishRoute.use(bodyParser.json());

dishRoute.route('/')
.all(function(req,res,next){
  res.writeHead(200,{'content-Type':'text/plain'});
  next();
})

.get(function(req,res,next){
  res.end('Giving you all the details');
})

.post(function(req,res,next){
  res.end('Create the values name is '+req.body.name+' and description is '+req.body.description);
})

.delete(function(req,res,next){
  res.end('Deleting all the dishes');
});

dishRoute.route('/:dishId')
.all(function(req,res,next){
  res.writeHead(200,{'content-Type':'text/plain'});
  next();
})

.get(function(req,res,next){
  res.end('Giving the details of specific dish '+req.params.dishId);
})

.post(function(req,res,next){
  res.end('Creating the new details, name is '+req.body.name+' and description is '+req.body.description);
})

.put(function(req,res,next){
  res.end('Updating the values of '+req.params.dishId);
})

.delete(function(req,res,next){
  res.end('Deleting the dish - '+req.params.dishId);
});

app.use('/dishes',dishRoute);

app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
  console.log("Running server at http://"+hostname+':'+port);
});
