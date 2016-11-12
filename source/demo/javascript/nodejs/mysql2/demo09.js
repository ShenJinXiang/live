var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: '6098',
	database: 'demo1',
	port: 3306
});

/*
pool.query('select * from user', function (err, rows, fields) {
	if (err) throw err;
	console.log(rows);
});
*/
pool.getConnection(function (err, connection) {
	connection.query('select * from user', function (err, rows) {
		connection.release();
		console.log(rows);
	});
});
