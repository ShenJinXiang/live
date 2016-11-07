// index.js

var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'cst_gx',
	password: 'pass#word1',
	database: 'demo1',
	port: 3306
});

conn.connect();

conn.query('select * from user', function(err, rows) {
	if(err) {
		console.error(err);
	}
	console.log(rows);
})

conn.end();
