var express = require('express');
var data = require('../database/data.js');
var bodyParser = require('body-parser');
var database = require('../database/index.js');
var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));




//app.get{get all quotes from database, no bugs plz}



app.listen(3000, function(){
  console.log('Listening to Port 3000!!!');
});
