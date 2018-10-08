var assert = require('assert');
var BankAccount = require('../bank-account').BankAccount;

describe('Bank account', () => {
    it('should have no money on deposit in the beginning', () => {
        assert.equal(BankAccount.balance, 0);
    });

    it('should be able to withdraw money', () => {
        assert.equal(BankAccount.widthraw(20), -20);
    });

    it('should be able to deposit money', () => {
        assert.equal(BankAccount.deposit(30), 10);
    });
})