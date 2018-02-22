var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../server/public'));

app.get('/', routes.renderHome)
app.get('/cohort', routes.renderCohort)
app.get('/student/:id', routes.renderStudent)

module.exports = app;
