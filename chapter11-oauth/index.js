const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(__dirname + '/public'));

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

let apiUrl = 'https://slack.com/api';

const getUserFullname = (oauthToken) => new Promise((resolve, reject) => {
  console.log(oauthToken);
  request.post('https://slack.com/api/users.info', {form: {token: oauthToken }}, function (error, response, body) {
    if (!error && response.statusCode < 300) {
      console.log(body);
      return resolve(JSON.parse(body).user.real_name);
    } else {
      return resolve('Error occured! ', error);
    }
  });
});

app.get('/auth', function(req, res){
  if (!req.query.code) { 
    console.log('Access denied');
    return;
  }
  
  var data = {form: {
    client_id: '407936343120.446070522853',
    client_secret: '2e2588e3738da7d8439033ce9896c1ec',
    code: req.query.code
  }};

  request.post(apiUrl + '/oauth.access', data, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send({ data: body })
    }
  })
});
