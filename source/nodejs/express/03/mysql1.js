// mysql1.js

var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '6098',
	port: 3306,
	database: 'demo1'
});

conn.connect();

conn.query('select * from user', function (err, rows, fields) {
	if (err) {
		console.log(err);
	}

	console.log(fields);
	console.log(rows);
});

conn.end();
