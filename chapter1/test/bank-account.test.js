var assert = require('assert');
var BankAccount = require('../bank-account').BankAccount;

describe('Bank account', () => {
    it('should have nomoney on deposit in the beginning', () => {
        var obj = {
            foo: "hello world",
            fn: function () {
                console.log(arguments.join(''));
            }
        }

        obj.fn(1,2,3,4,45,6, "", {}, [], Infinity,1,23,1,12,12,3,12,3123,123,123,123,123,123,123);
        
        //assert.equal(BankAccount.balance, 0);
    });
})