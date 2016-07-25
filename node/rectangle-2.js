module.exports = function(x,y,callback){
  try{
    if(x<=0 || y<=0){
       throw new Error('Values should be positive to construct a rectangle'); 
    }else{
      callback(null, {
        area: function(){  return (x*y); },
        perimeter: function(){  return (2*(x+y)); } 
      });
    }
  }
  catch(error){
    callback(error,null);
  }
}
