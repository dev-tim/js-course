var assert = require('assert');
var BankAccount = require('../bank-account').BankAccount;

describe('Bank account', () => {
    it('should have no money on deposit in the beginning', () => {
<<<<<<< HEAD
        assert.equal(BankAccount.balance, 0);
    });

    it('should be able to withdraw money', () => {
        assert.equal(BankAccount.widthraw(20), -20);
    });

    it('should be able to deposit money', () => {
        assert.equal(BankAccount.deposit(30), 10);
=======

        var obj = {
            foo: "hello world",
            fn: function () {
                console.log(arguments.join(''));
            }
        }

        obj.fn(1,2,3,4,45,6, "", {}, [], Infinity,1,23,1,12,12,3,12,3123,123,123,123,123,123,123);
        
        //assert.equal(BankAccount.balance, 0);
>>>>>>> 4f8b4060407687a11e26eb422cb4e79289fe505c
    });
})