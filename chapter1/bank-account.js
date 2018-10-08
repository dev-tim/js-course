var BankSecurity = {
    foo: 42
}

var BankAccount = {
    balance: 0,
<<<<<<< HEAD

    deposit: function (money) {
        this.balance = this.balance + money;
        return this.balance;
    },
    
=======
    deposit: function (money) {
        this.balance = this.balance + money;
    },
>>>>>>> 4f8b4060407687a11e26eb422cb4e79289fe505c
    widthraw: function (cash) {
        this.balance = this.balance - cash;
        return this.balance;
    }
<<<<<<< HEAD
}
=======
};
>>>>>>> 4f8b4060407687a11e26eb422cb4e79289fe505c

module.exports = {
    BankAccount: BankAccount,
    BankSecurity: BankSecurity
}
<<<<<<< HEAD
=======


>>>>>>> 4f8b4060407687a11e26eb422cb4e79289fe505c
