var assert = require('assert');
var BankAccount = require('../bank-account').BankAccount;

describe('Bank account', () => {
    it('should have no money on deposit in the beginning', () => {

        var obj = {
            foo: "hello world",
            fn: function () {
             //   console.log(this.foo.split(''));
            }
        }

        var boo = obj.fn;
        console.log(boo());
        //assert.equal(BankAccount.balance, 0);
    });
})