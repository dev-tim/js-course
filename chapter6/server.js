const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const users = [
    {
        id: 1,
        name: 'Kyril',
        email: 'kyril@gmail.com',
        type: 'student'
    },
    {
        id: 2,
        name: 'Vasya',
        email: 'vasya@gmail.com',
        type: 'teacher'
    },
    {
        id: 3,
        name: 'Lena',
        email: 'lena@gmail.com',
        type: 'student'
    },
];

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/users', function(req, res){
    res.send(users);
})

app.post('/users', function(req, res){
    const user = req.body;
    console.log('Req' + JSON.stringify(req.body))
    users.push(user);
    res.send(users);
})

app.listen(3000)