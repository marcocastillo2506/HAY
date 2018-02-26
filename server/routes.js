const db = require('../database/index.js');

//Query dB for quotes
exports.renderQuotes = (req, res) => {
    db.getHomeQuotes(data => {
      res.status(200).json(data);
    });
  }

//Query dB for students & mentors
exports.renderCohort = function(req, res) {
  db.getAllStudents(res => {
    res.status(200).json(res)
  });

  db.getAllMentors(res => {
    res.status(200).json(res)
  });
}

//Query dB for single student
exports.renderStudent = function(req, res) {
  db.getSingleProfile(res => {
      res.status(200).json(res)
    });
  }
