// demo12.js
var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '6098',
	database: 'nodejs',
	port: 3306
});

conn.connect();

var insertSql = 'insert into user (`name`, `age`) values (?, ?)';
conn.query(insertSql, ['hahs', 12], function (err, results) {
	if (err) throw err;
	console.log(results);
	conn.query('select * from user', function (err, rows) {
		if (err) throw err;
		console.log(rows);
	});
});
