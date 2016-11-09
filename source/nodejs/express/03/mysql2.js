// mysql2.js

var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: '6098',
	database: 'demo1',
	port: 3306
});

