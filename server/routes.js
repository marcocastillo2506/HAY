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

//Query dB for single student
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
