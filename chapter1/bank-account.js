var BankSecurity = {
    foo: 42
}

var BankAccount = {
    balance: 0,
    deposit: function (money) {
        this.balance = this.balance + money;
    },
    widthraw: function (cash) {
        this.balance = this.balance - cash;
        return this.balance;
    }
};

module.exports = {
    BankAccount: BankAccount,
    BankSecurity: BankSecurity
}


