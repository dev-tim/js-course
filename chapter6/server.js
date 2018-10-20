const express = require('express')
const body = requier('body-parser')
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
    }
];

app.use(express.static('public'))

app.get('/users', function(req, res){
    res.send(users);
})

app.listen(3000)