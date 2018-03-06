const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../react-client/dist"));
//app.use(express.static(__dirname + "/../server/public"));

//GET request routes
app.get("/home", route.getQuotes)

app.get("/home-pics", route.getGallery)

app.get("/cohort", route.getCohortMembers)

//GET profile/:id is not used
//app.get('/profile/:id', route.renderProfile)

module.exports = app;
