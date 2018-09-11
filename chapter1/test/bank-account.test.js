<<<<<<< HEAD
var assert = require("assert");
var BankAccaunt = require("../bank-accaunt").BankAccaunt;

describe("Bank accaunt", () =>{
    it ( "should have no money on deposit in the beginning", () => {



        assert.equal(BankAccaunt.balance, 0);
    })
});
=======
var assert = require('assert');
var BankAccount = require('../bank-account').BankAccount;

describe('Bank account', () => {
    it('should have no money on deposit in the beginning', () => {

        var obj = {
            foo: "hello world",
            fn: function () {
                console.log(this.foo.split(''));
            }
        }

        var boo = obj.fn;
        console.log(boo());
        //assert.equal(BankAccount.balance, 0);
    });
})
>>>>>>> 82620a94b6c6c7c62a41c54f22c827815210d790
