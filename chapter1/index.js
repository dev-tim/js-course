(function(){

  let Function = {};

  Function.add = function (a, b){
    return a + b;
  };

  Function.divideAndMultiply = function (a,b){
    if (b==0){
      return undefined;
    }
    return a*a/b;
  };

  Function.roundNumber = function (a){
    return Math.round;
  };

  Function.findSinCos = function (a) {
    return Math.sin(a) * Math.cos(a);
  };

  Function.parseNumberFromString = function (price){
    return parseFloat (price);
  };

  Function.findObjectValueByKey = function  (obj, key){
    var res = obj ["key"];
    return res;
  };

  Function.findObjectValueByDynamicKey = function (obj, key){
    var res = obj.key;
    return res;
  };

  Function.parseObjectFromJSON = function (json){
    return JSON.parse (json);
  };

  Function.pushToArray = function (array,b){
    return array.push(b);
  };

  Function.popFromArray = function (array,b){
    return array.pop(b);
  };

  







  







  let o = {
     key: { key: { key: 42 }}
  };

  let arr = [1,2,3,4,5];
  
  console.log(arr[4]);




  let blablaFunction = function(phrase) {
     return function(){
       console.log('Phrase ' + phrase);
     };
  };

  let composedBlablaFunction = function(blaFunction) {
    console.log('Get some air in your lungs!');
    blaFunction();    
    console.log('Now you can rest!');
  };

  composedBlablaFunction(blablaFunction('Hello world')) ;
}());
