var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/coursera';

MongoClient.connect(url,function(err,db){
  assert.equal(err,null);
  console.log("Connected correctly to mongo server");
    var collection = db.collection('dishes');
    collection.insertOne({name:'Dosa',description:'Made of rice batter'},function(err,result){
      assert.equal(err,null);
      console.log('After insert: ');
      console.log(result.ops);
        collection.find({}).toArray(function(err,docs){
          assert.equal(err,null);
          console.log("Found");
          console.log(docs);
          db.dropCollection("dishes",function(err,result){
            assert.equal(err,null);
            db.close();
          });
        });
    });
});
