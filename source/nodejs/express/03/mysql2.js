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

var query = function (sql, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null, null);
		} else {
			connection.query(sql, function (qerr, rows, fields) {
				connection.release();
				callback(qerr, rows, fields);
			});
		}
	});
}

module.exports = query
