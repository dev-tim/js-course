var assert = require('assert');
var BankAccount = require('../bank-account').BankAccount;

describe('Bank account', () => {
    it('should have no money on deposit in the beginning', () => {
        assert.equal(BankAccount.balance, 0);
    });

    it('should be able to deposit money', () => {
        BankAccount.deposit(100);
        assert.equal(BankAccount.balance, 100);
    });

    it('should be able to widthraw money', () => {
        BankAccount.widthraw(50);
        assert.equal(BankAccount.balance, 50);
    });

    it('should be able to widthraw money over credit limit', () => {
        BankAccount.widthraw(500);
        assert.equal(BankAccount.balance, 50);
    });

})