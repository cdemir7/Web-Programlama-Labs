'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '7890Az12**',
  database: 'foy3'
});

let sorgu = `SELECT * from employee WHERE DepartmentName="Engineering"`;


connection.connect(function (err) {
    if (err) throw err;
    connection.query(sorgu, function (err, results) {
      if (err) throw err.message;
      console.log(results);
    });
  });