const express = require('express');
const bodyParser = require('body-parser');
const BankAccount = require('./bank-account').BankAccount;

const app = express();

app.use(express.static('public'))


app.use(bodyParser.json())

app.get('/balance', function(req, res){
    res.send({
        balance: BankAccount.balance
    })
});

app.put('/balance', function(req, res){
    const body = req.body;
    console.log(body);

    if (body && body.operation == 'put'){
        BankAccount.deposit(parseFloat(body.amount));
    } else if (body && body.operation == 'pull') {
        BankAccount.widthraw(parseFloat(body.amount));
    }

    res.send({
        balance: BankAccount.balance
    })
});

app.listen(3000);