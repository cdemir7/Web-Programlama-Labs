'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '7890Az12**',
  database: 'foy3'
});

let sqlSorgusu = `CREATE TABLE IF NOT EXISTS Employee (
  EmployeeId INT AUTO_INCREMENT NOT NULL,
  FistName VARCHAR(20) NOT NULL,
  LastName VARCHAR(30) NOT NULL,
  DepartmentName VARCHAR(30) NOT NULL,
  CONSTRAINT sira PRIMARY KEY(EmployeeId)
);`;

connection.connect(function (err) {
  if (err) throw err;
  connection.query(sqlSorgusu, function (err, results) {
    if (err) throw err.message;
    console.log('Tablo oluşturuldu.');
  });
});