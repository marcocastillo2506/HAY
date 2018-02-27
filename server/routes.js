const db = require('../database/index.js');

//Query dB for quotes
exports.getQuotes = (req, res) => {
    db.getHomeQuotes(data => {
      res.status(200).json(data);
    });
  }

//Query dB for students & mentors

exports.getStudents = function(req, res, next) {
  db.getAllStudents(data => {
    res.status(200).json(data)
  });
}

exports.getMentors = function(req, res, next) {
  db.getAllMentors(data => {
    res.status(200).json(data)
  });
}

//Query dB for single student
exports.getSingleStudent = function(req, res) {
  db.getSingleProfile(data => {
      res.status(200).json(data)
    });
  }
