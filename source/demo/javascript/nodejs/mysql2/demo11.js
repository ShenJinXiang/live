// demo11.js

var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '6098',
	database: 'nodejs',
	port: 3306
});


conn.query('select * from user where id = ?', 1, function(err, rows, fields) {
	if (err) {
		throw err;
	}

	console.log(rows);
});

conn.end();
