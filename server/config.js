const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require('../database/index.js');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(express.static(__dirname + "/../server/public"));

//GET request routes
app.get("/", routes.renderQuotes);
console.log('up to here, fine')
app.get("/cohort", routes.renderCohort);

//app.get('/student/:id', routes.renderStudent)

module.exports = app;
