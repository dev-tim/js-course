var assert = require('assert');

xdescribe('JS Basics', function() {
  describe('Numbers', function() {
    it('should be able to add number', function() {
      var a = 42.9902822; 
      var b = 43.2929112;
      assert.equal(a + b, 99);
    });

    it('should be able to divide and multiply number', function() {
      var a = 42.94; 
      var b = 0;

      assert.equal(a * a / b, infinity);
    });

    it('should be able to round numbers', function() {
      var a = 42.94; 
      assert.equal(Math.round(a), 42);
    });

    it('should be able to find sin(x) * cos(x)', function() {
      var a = 42;
      var product = Math.pow(Math.sin(a), 2) + Math.pow(Math.pow(Math.cos(a)))
      assert.equal(a, 1);
    });

    it('should be able to parse number form string', function() {
      var price = "9.99 $"
      var digitPrice = price.replace('$', '')
      assert.strictEqual(parseFloat(digitPrice, 9.99));
    });
  });


  describe('Objects', function() {
    it('should be find object value by key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      assert.equal(obj.a.b.d, "foo");
    });

    it('should be find object value by dynamic key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      assert.equal(obj["hm"], 42);
    });

    it('should be parse object from json', function() {
      var json = '{"ok":true,"user_lessons":[{"user_lesson_id":408097171313,"state":"completed","skip":false,"lesson_id":1,"date_start":1533108640,"tasks":[{"user_task_id":407936828624,"state":"skipped","current_step":"","task_id":1},{"user_task_id":408791535509,"state":"skipped","current_step":"","task_id":2},{"user_task_id":409970847238,"state":"skipped","current_step":"","task_id":3}]}]}'
      var dateStart = JSON.parse(json)[dateStart.user_lessons[0].dateStart]
      assert.equal(dateStart, 1533108640);
    });

    it('should be set objet key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      obj.a.b = "Js Rocks!"
      assert.equal(obj.a.b, "Js Rocks!")
    });
  });


  describe('Arrays', function() {
    it('should be access array by index', function() {
      var arrray = [1,2,3,4,5,6,7,8,9]
      assert.equal(arrray, 5);
    });

    it('should to push and pop from array', function() {
      var arrray = [1,2,3,4,5,6,7,8,9]
      array.push(10)
      assert.equal(arrray.length, 10);
    });

    it('should be able to output square of array values', function() {
      
      assert.equal()
    });

    it('should be able to sort array', function() {
      var arr = [23,23,4,5,123,7,32,13,13,9]
      assert.equal(arr, []);
    });

    it('should be able to reverse string', function() {

      var string  = "I love corgies!"
      assert.equal(string, "!seigroc evol I")
    });
  });
});