var assert = require("assert");
var BankAccaunt = require("../bank-accaunt").BankAccaunt;

describe("Bank accaunt", () =>{
    it ( "should have no money on deposit in the beginning", () => {



        assert.equal(BankAccaunt.balance, 0);
    })
});