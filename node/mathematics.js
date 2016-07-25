var argv = require('yargs')
           .usage('Usage: node $0 --x=[num] --y=[num]')
           .demand(['x','y'])
           .argv; 

var rect = require('./rectangle-2');
function solveRect(x,y){
    rect(x,y,function(err,rectangle){
      if(err){
        console.log(err);
      }else{
        console.log("area of rectangle is "+rectangle.area());
        console.log("perimeter of rectangle is "+rectangle.perimeter());
      }
    });
}
solveRect(argv.x,argv.y);

