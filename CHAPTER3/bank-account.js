var BankAccount = {
    balance: 0,
    deposit: function (money) {
        this.balance = this.balance + money;
    },
    widthraw: function (cash) {
        let diff = this.balance - cash;
        if (diff < 0){
            return;
        } 

        this.balance = this.balance - cash;
        return this.balance;
    }
};

module.exports = {
    BankAccount: BankAccount
}
