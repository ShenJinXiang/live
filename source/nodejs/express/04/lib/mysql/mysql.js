// lib/mysql/mysql.js

var mysql = require('mysql');

var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '6098',
	port: 3306,
	database: 'nodejs',
	connectionLimit: 20
});

var query = function (sql, cb) {
	pool.getConnection(function (err, conn) {
		if (err) {
			cb(err, null, null);
		} else {
			conn.query(sql, function (qerr, rows, fields) {
				conn.release();
				cb(qerr, rows, fields);
			});
		}
	});
};

module.exports = query;
