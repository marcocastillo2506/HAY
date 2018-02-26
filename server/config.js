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
app.get("/home", (req, res, next) => {
  db.getHomeQuotes(data => {
    res.status(200).json(data);
    });
  }
)

app.get("/cohort", (req, res, next) => {
  db.getAllMentors(data => {
    res.status(200).json(data)
    });
  }
)

//app.get('/student/:id', routes.renderStudent)

module.exports = app;
