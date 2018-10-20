const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.STRING
  });


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
    sequelize.sync()
        .then(() => User.create({
            username: user.name,
            birthday: user.email
        }))
        .then(jane => {
            res.send("Done");
        });
})

app.listen(3000)