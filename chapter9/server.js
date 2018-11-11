const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

function generateLectures(numberOfLectures = 0){
    return (Array.from(Array(numberOfLectures).keys())).map((nullItem, index) => {
        return {
          id: index,
          lection: 'Lection ' + index + ' ' + Date.now(),
          video: "https://www.youtube.com/watch?v=WEkSYw3o5is",
          homework: "test homework test homework test homework test homework test homework test homework" + Date.now()
        }
    })
  }
  
let itemsArray = generateLectures(3);

app.get('/api/lections', function(req, res){
    res.send(itemsArray);
})

app.listen(9000)