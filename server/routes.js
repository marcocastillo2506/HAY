const db = require('../database/index.js');
const url = require('url');

//Query dB for quotes
exports.getQuotes = (req, res) => {
  db.getHomeQuotes()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
  }

//Query dB for students & mentors
//Promise.all allows promisified mysql queries to run concurrently
//Promise.all takes promisified functions, runs them asynchronously, returns array of results
exports.getCohortMembers = (req, res) => {
  Promise.all([
    db.getCohortMentors(),
    db.getCohortStudents()
  ])
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}

//Query dB for single student: Not used in app, can be re-purposed
exports.renderProfile = function(req, res) {
  let profId = req.url.params.id;
  db.getSingleProfile(profId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {console.log(err) })
  }

  //Query dB for gallery
exports.getGallery = (req, res) => {
    Promise.all([
      db.getGallery()
    ])
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => { console.log(err) })
  }
