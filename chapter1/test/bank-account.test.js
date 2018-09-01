var assert = require('assert');
var BankAccount = require('../bank-account').BankAccount;

describe('Bank account', () => {
    it('should have no money on deposit in the beginning', () => {
        assert.equal(BankAccount.balance, 0);
    });
})