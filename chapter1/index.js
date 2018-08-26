let Formulas = {};

Formulas.add = function(a, b){
  return a + b;
}

Formulas.divideMultiply = function(a, b){
  if(b==0){
    return undefined;
  }
  return a * a / b;
}

Formulas.roundNumbers = function(a){
  return Math.round(a);
}

Formulas.sinTimesCos = function(a){
  return Math.sin(a)*Math.cos(a);
}

Formulas.parseNumberFromString = function(a){
  return parseFloat(a);
}

Formulas.findObjectByKey = function(obj, key){
  var i;
  var j;
  var p;
  for(i = 0; i < Object.keys(obj).length; i++){
    if(Object.keys(obj)[i] === key){
      return Object.values(obj)[i];
    }
    if(typeof Object.values(obj)[i] === "object" && (Object.values(obj)[i] !== null)){
      var newObject = Object.values(obj)[i];
        for(j = 0; j < Object.keys(newObject).length; j++){
          if(Object.keys(newObject)[j] === key){
            return Object.values(newObject)[j];
          }
          if(typeof Object.values(newObject)[j] === "object" && (Object.values(newObject)[j] !== null)){
            var newObject2 = Object.values(newObject)[j];
            for(p = 0; p < Object.keys(newObject2).length; p++){
              if(Object.keys(newObject2)[p] === key){
                return Object.values(newObject2)[p];
              }  
            }
          }
        } 
    }
  }
}

Formulas.parseJSON = function(a){
  return JSON.parse(a);
}

Formulas.pushToArray = function(a,b){
  return a.push(b);
}

Formulas.squareArrayValues = function(a){
  var newArr = a;
  for (var i = 0; i < newArr.length; i++){
    newArr[i] = newArr[i]*newArr[i];
  }
  return a;
}

Formulas.sortArray = function(a){
  return a.sort(Formulas.sortNumbers)
}

Formulas.sortNumbers = function(a,b){
  return a-b;
}

Formulas.reverseString = function(a){
  var newString = "";
  for (var i = a.length - 1; i >= 0; i--) {
    newString += a[i];
  }
  return newString;
}

module.exports = Formulas;


