var Function = {
  add: function (a, b){
    return a + b;
  },

  divideAndMultiply: function (a,b){
    if (b==0){
      return undefined;
    }
    return a*a/b;
  },
  roundNumber: function (a){
    return Math.round(a);
  },

  findSinCos: function (a) {
    return Math.sin(a) * Math.sin(a) +  Math.cos(a) *  Math.cos(a);
  },

  parseNumberFromString: function (price){
    return parseFloat (price);
  },

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

Function.squareOfArrayValue = function (arr, exponent){
  return Math.pow (arr [i], exponent);
};

Function.sortArray = function (){
  return arr.sort;
};

Function.reverseString = function (string){
  return string.split("").reverse().join("");
};

module.exports = Function;