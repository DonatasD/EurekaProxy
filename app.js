var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const portServer = 2222;
const eurekaServer = 'http://localhost:1111';
const restAppsPath = '/eureka/apps/';
const targetApp = ""

app.get('/eureka/apps/:queryApp', function (req, res) {
  var queryApp = req.params.queryApp;

  var options = {
    url: eurekaServer+restAppsPath+queryApp,
    headers: {
      'Accept': 'application/json'
    }
  };

  request(options, function(err, response, body) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.send(body);
  });
})

app.listen(portServer, function () {
  console.log('Starting at port '+portServer+'!')
})
