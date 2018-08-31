var BankAccaunt = {
    balance: 0,

    deposit: function(){
        this.balance=this.balance+money;
    },
    widthraw: function(){
        this.balance=this.balance-cach;
        return this.balance;
    } 
}

var BankSecurity={
    foo: "hallo"
}

module.exports = {
    BankAccaunt: BankAccaunt,
    BankSecurity: BankSecurity,
}