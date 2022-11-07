'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '7890Az12**',
  database: 'foy3'
});

let sorgu = `INSERT INTO employee(FistName, LastName, DepartmentName) VALUES ?`;
let datas = [
  ['Ken', 'Sanchez', 'Executive'],
  ['Terri', 'Duffy', 'Engineering'],
  ['Roberto', 'Tamburello', 'Engineering'],
  ['Rob', 'Wlaters', 'Engineering'],
  ['Gail', 'Erickson', 'Engineering'],
  ['Jossef', 'Goldberg', 'Engineering'],
  ['Dylan', 'Miller', 'Support'],
  ['Diane', 'Margheim', 'Support'],
  ['Gigi', 'Matthew', 'Support'],
  ['Michael', 'Raheem', 'Support'],  
];

connection.connect(function (err) {
  if (err) throw err;
  connection.query(sqlSorgusu, [datas], function (err, results) {
    if (err) throw err.message;
    console.log(results.affectedRows + ' kayıt eklendi.');
  });
});