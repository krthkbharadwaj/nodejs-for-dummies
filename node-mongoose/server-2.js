var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./models/dishes-2.js');

console.log("Included dishes");

var url = 'mongodb://localhost:27017/coursera';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function() {
  console.log("Connected correctly to server");

  Dishes.create({
    name: "sdfsdfsdfsdfUthapizza_teswwt",
    description:'Test',
    comments:[ 
      {
        rating: 3,
        comment: 'This is first comment',
        author:'Matt deamon'
      }
    ]
  },function(err, dish){
    if(err) throw err;
    console.log('Dish created');
    console.log(JSON.stringify(dish));
    
    var id = dish._id;    
    console.log(id);     

    setTimeout(function(){
      Dishes.findByIdAndUpdate(id,{
        $set: { description:'Updated text' } 
      }, {
          new:true
      }
      ).exec(function(err,dish){
        if(err) throw err;
        console.log(JSON.stringify(dish));
        
        dish.comments.push({
          rating: 4,
          comment: "I am getting sinking feeling",
          author: "Leonardo De Carpaccio"
        });        
  
        dish.save(function(err,dish){
          console.log("Dish has been updated with new comments");
          console.log(JSON.stringify(dish)); 
            db.collection('dishes').drop(function(){
              db.close();
            });
        });
      });
    },1000);
  });
});

