(function(){

  console.log('Hello world');

  let add = function(a, b){
    return a + b;
  }

  let o = {
     key: { key: { key: 42 }}
  };

  let arr = [1,2,3,4,5];
  
  console.log(arr[4])




  let blablaFunction = function(phrase) {
     return function(){
       console.log('Phrase ' + phrase);
     }
  }

  let composedBlablaFunction = function(blaFunction) {
    console.log('Get some air in your lungs!');
    blaFunction();    
    console.log('Now you can rest!')
  }

  composedBlablaFunction(blablaFunction('Hello world')) 
}());