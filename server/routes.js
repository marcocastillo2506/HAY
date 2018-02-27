const db = require('../database/index.js');

//Query dB for quotes
exports.getQuotes = (req, res) => {
    db.getHomeQuotes(data => {
      res.status(200).json(data);
    });
  }

//Query dB for students & mentors

exports.getCohortMembers = function(req, res, next) {
  let cohortData = {};
  const cohortPromise = new Promise((resolve, reject) => {

  })
  db.getAllStudents(data => {
    db.getAllMentors(data => {

    });
  });
}

//Query dB for single student
exports.getSingleStudent = function(req, res) {
  db.getSingleProfile(data => {
      res.status(200).json(data)
    });
  }
