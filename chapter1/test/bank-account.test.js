var assert = require('assert');
var BankAccount = require('../bank-account').BankAccount;

describe('Bank account', () => {
    it('should have nomoney on deposit in the beginning', () => {
        var obj = {
            foo: 42,
            fn : function() {
                console.log(this.foo);
            }
        }
        console.log(obj.fn());
        //assert.equal(BankAccount.balance, 0);
    });
})