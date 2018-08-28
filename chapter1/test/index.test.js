var assert = require('assert');

describe('JS Basics', function() {
  describe('Numbers', function() {

    
    it('should be able to add number', function() {
      var a = 42; 
      var b = 47;
      assert.equal(add, 99);
    });

    it('should be able to divide and multiply number', function() {
      var a = 42; 
      var b = 0;
      assert.equal(Function.divideAndMultiply(a,b), undefined);
    });

    it('should be able to round numbers', function() {
      var a = 42.94; 
      assert.equal(Function.roundNumber (a), 43);
    });

    it('should be able to find sin(x) * cos(x)', function() {
      var a = 42;
      assert.equal(Function.findSinCos (a), 0.36659516003);
    });

    it('should be able to parse number form string', function() {
      var price = "9.99 $";
      assert.equal(Function.parseNumberFromString(price), 9.99);
    });
  });


  describe('Objects', function() {
    
    it('should be find object value by key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 };
      assert.equal(Function.findObjectValueByKey(obj, 'd'), "foo");
    });

    it('should be find object value by dynamic key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 };
      assert.equal(Function.findObjectValueByDynamicKey (obj, 'c'), 42);
    });

    it('should be parse object from json', function() {
      var json = '{"ok":true,"user_lessons":[{"user_lesson_id":408097171313,"state":"completed","skip":false,"lesson_id":1,"date_start":1533108640,"tasks":[{"user_task_id":407936828624,"state":"skipped","current_step":"","task_id":1},{"user_task_id":408791535509,"state":"skipped","current_step":"","task_id":2},{"user_task_id":409970847238,"state":"skipped","current_step":"","task_id":3}]}]}';
      var parsedJSON = Function.parseObjectFromJSON (json);
      var dateStart = parsedJSON.user_lessons[0].date_start;
      assert.equal(dateStart, 1533108640);
    });

    it('should be set object key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 };
      obj.a.b = "Js Rocks!";
      assert.equal(obj.a.b, "Js Rocks!");
    });
  });


  describe('Arrays', function() {
    
    it('should be access array by index', function() {
      var arrray = [1,2,3,4,5,6,7,8,9];
      assert.equal(arrray [4], 5);
    });

    it('should to push and pop from array', function() {
      var array = [1,2,3,4,5,6,7,8,9];
      var array1 = Function.pushToArray (array, 10, 11, 12); 
      var array2 = Function.popFromArray (array1, 12);
      assert.equal(array2.length, 10);
    });

    it('should be able to output square of array values', function() {
      var array = [1,2,3,4,5,6,7,8,9];
      var exponent = 2;
      assert.equal(Function.squareOfArrayValue ((array[3],exponent), 16));
    });

    it('should be able to sort array', function() {
      var arr = [7, 15, 2, 48];
      assert.equal(Function.sortArray (arr), [2, 7, 15, 48]);
    });

    it('should be able to reverse string', function() {
      var string  = "I love corgies!";
      assert.equal(Function.reverseString (string), "!seigroc evol I");
    });
  });
});