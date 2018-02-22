var express = require('express');
var data = require('../database/data.js');
var bodyParser = require('body-parser');
var database = require('../database/index.js');
var app = express();


app.use(express.static(__dirname + '/../client/dist'));














app.listen(3000, function(){
  console.log('Listening to Port 3000!!!');
});
