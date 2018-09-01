var assert = require('assert');
var Formulas = require('../index.js');

describe('JS Basics', function () {
  describe('Numbers', function () {
    it('should be able to add numbers', function () {
      var a = 45;
      var b = 54;
      assert.equal(Formulas.add(a, b), 99);
    });

    it('should be able to divide and multiply number', function () {
      var a = 4;
      var b = 2;
      assert.equal(Formulas.divideMultiply(a, b), 8);
    });

    it('should return undefined if divided by 0', function () {
      var a = 4;
      var b = 0;
      assert.equal(Formulas.divideMultiply(a, b), undefined);
    });

    it('should be able to round numbers', function () {
      var a = 42.94;
      assert.equal(Formulas.roundNumbers(a), 43);
    });

    it('should be able to find sin(x)*cos(x)', function () {
      var a = 0;
      assert.equal(Formulas.sinTimesCos(a), 0);
    });

    it('should be able to parse number form string', function () {
      var price = "9.99 $"
      assert.equal(Formulas.parseNumberFromString(price), 9.99);
    });
  });


  describe('Objects', function () {
    it('should be able to find object value by key', function () {
      var obj = { a: { b: { d: "foo" } }, c: 42 };
      assert.equal(Formulas.findObjectValueByKey(obj, 'd'), "foo");
    });

    it('should be able to find object value by dynamic key', function () {
      var obj = { a: { b: { d: "foo" } }, c: 42 }
      assert.equal(Formulas.findObjectValueByKey(obj, 'c'), 42);;
    });

    it('should be able to parse object from json', function () {
      var json = '{"ok":true,"user_lessons":[{"user_lesson_id":408097171313,"state":"completed","skip":false,"lesson_id":1,"date_start":1533108640,"tasks":[{"user_task_id":407936828624,"state":"skipped","current_step":"","task_id":1},{"user_task_id":408791535509,"state":"skipped","current_step":"","task_id":2},{"user_task_id":409970847238,"state":"skipped","current_step":"","task_id":3}]}]}'
      var parsedJSON = Formulas.parseJSON(json);
      var dateStart = parsedJSON.user_lessons[0].date_start;
      assert.equal(dateStart, 1533108640);
    });

    it('should be able to set object key', function () {
      var obj = { a: { b: { d: "foo" } }, c: 42 }
      obj.a.b = "Js Rocks!";
      assert.equal(obj.a.b, "Js Rocks!")
    });
  });


  describe('Arrays', function () {
    it('should be able to access array by index', function () {
      var arrray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      assert.equal(arrray[4], 5);
    });

    it('should to push and pop from array', function () {
      var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      Formulas.pushToArray(array, 10);
      assert.equal(array.length, 10);
    });

    it('should be able to output square of array values', function () {
      var arr = [1, 2, 3, 4, 5];
      var expectedArr = [1, 4, 9, 16, 25];
      var newArr = Formulas.squareArrayValues(arr);
      assert.deepEqual(newArr, expectedArr);
    });

    it('should be able to sort array', function () {
      var arr = [23, 23, 4, 5, 123, 7, 32, 13, 13, 9];
      var expectedArr = [4, 5, 7, 9, 13, 13, 23, 23, 32, 123];
      var sortedArr = Formulas.sortArray(arr);
      assert.deepEqual(sortedArr, expectedArr);
    });

    it('should be able to reverse string', function () {
      var string = "I love corgies!";
      var newString = Formulas.reverseString(string);
      assert.equal(newString, "!seigroc evol I");
    });
  });
});