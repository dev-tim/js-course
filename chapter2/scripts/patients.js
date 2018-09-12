const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash'); 
const app = express();

app.use(bodyParser.json())

const patients = {};

app.get('/', function(req, res){
   res.send('Hello world')
});

app.get('/patients', function(req, res){
    res.send(_.values(patients));
});

app.get('/patients/:id', function(req, res){
    if (req.params && req.params.id && patients[req.params.id]){
        res.send(patients[req.params.id]);
    } else {
        res.sendStatus(404);
    }
});

app.delete('/patients/:id', function(req, res){
    res.send(patients[0]);
});

app.post('/patients', function(req, res){
    const patient = req.body;
<<<<<<< HEAD
<<<<<<< HEAD
console.log(req.body);
//console.log(req.route.Route.stack);
    if (patient && patient.id){
        patients[patient.id] = patient;
        res.status(201).send(patient);
=======

    if (patient && patient.id){
        patients[patient.id] = patient;
        res.send(201, patient);
>>>>>>> Added chapter2
=======
console.log(req.body);
//console.log(req.route.Route.stack);
    if (patient && patient.id){
        patients[patient.id] = patient;
        res.status(201).send(patient);
>>>>>>> added bank-account.js
    } else {
        res.sendStatus(400);
    }
});

app.get('/health', function(req, res){
    const healthStatus = {
        temperature: 37.0,
        mood: "average"
    };

    res.send(healthStatus);
});


app.listen(8080, function(){
    console.log('Its alive!');
});