(function(){

  console.log('Hello world');

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
