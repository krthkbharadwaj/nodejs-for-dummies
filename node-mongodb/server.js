var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var dboper = require('./operations');

var url = 'mongodb://localhost:27017/coursera';

MongoClient.connect(url,function(err,db){
  assert.equal(err,null);
  console.log("Connected to mongodb server");
  
  dboper.insertDocument(db,{name:'ja',description:'adding through operations new method'},"dishes",function(result){
    console.log(result.ops);
  });
  dboper.updateDocument(db,{name:'ja',description:'testing goingon'},"dishes",function(result){
    console.log(result);
  });
  dboper.findDocuments(db,"dishes",function(result){
    console.log(result);
  });
  dboper.removeDocument(db,{name:'ja'},"dishes",function(rm){
    console.log(rm);
  });
  dboper.findDocuments(db,'dishes',function(result){
    console.log(result);
  });
});
