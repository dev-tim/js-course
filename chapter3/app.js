const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const _ = require('lodash'); 
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root


const accounts = {};
let ballance = 0;


app.get('/', function(req, res){
    res.send('Welcome to our bank!')
 });

app.post('/accounts', function(req, res){
    const account = req.body;

    if (account && account.id){
        accounts[account.id] = account;
        res.status(201).send(account);
    } else {
        res.sendStatus(400);
    }
});

app.put('/accounts/:id/deposit', function(req, res){
    ballance = BankAccount.deposit(parseFloat(_.values(req.body))); 
     res.send(ballance);
});

app.put('/accounts/:id/withdraw', function(req, res){
    ballance= BankAccount.widthraw(parseFloat(_.values(req.body)));
    res.send(ballance);
});

app.get('/acounts/:id', function(req, res){
    if (req.params && req.params.id && accounts[req.params.id]){
        res.send(accounts[req.params.id]);
    } else {
        res.sendStatus(404);
    }
});

app.get('/accounts-fake', function(req, res){
    res.send({balance : 42});
})

app.get('/accounts', function(req, res){
    res.send(_.values(accounts));
});

app.delete('/accounts/:id', function(req, res){
    res.send(accounts[0]);
});

var BankAccount = {
    balance: ballance,
    deposit: function (money) {
        this.balance = this.balance + money;
        return this.balance;
    },
    widthraw: function (cash) {
        this.balance = this.balance - cash;
        return this.balance;
    }
};

app.listen(3000, 
    console.log('Its alive!')
);