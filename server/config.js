var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes");

var app = express();

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(express.static(__dirname + "/../server/public"));

app.get("/", (req, res) => {
  res.send("Working");
});
//app.get('/cohort', (req, res) =>{
//  res.send('cohort')
//})
//app.get('/student/:id', routes.renderStudent)

module.exports = app;
