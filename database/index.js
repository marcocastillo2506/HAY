const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllStudents = function(callback) {
  connection.query('SELECT * FROM profiles WHERE role = "student"', function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  });
};

const getAllMentors = function(callback) {
  connection.query('SELECT * FROM profiles WHERE role = "mentor"', function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  });
};

const getSingleProfile = function(callback) {
  connection.query('SELECT * FROM profiles WHERE id = ?', function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  });
};

module.exports = {
  getAllStudents,
  getAllMentors,
  getSingleProfile
};
