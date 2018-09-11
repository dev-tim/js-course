var assert = require('assert');


var BankSecutiry = {
   foo: 42
}

var BankAccount = {
    balance: 0,

    deposite: function (money) {
        this.balance = this.balance + money;
    },

    withdraw: function (cash) {
        this.balance = this.balance - cash;
        return this.balance;
    }
}

module.exports = {
    BankAccount : BankAccount,
    BankSecutiry : BankSecutiry
    }
