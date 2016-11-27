// mysqlUtil/mysqlUtil.js
let mysql = require('mysql');

let pool = mysql.createPool({
	host: 'localhost',
	port: 3306,
	database: 'nodejs',
	user: 'root',
	password: '6098',
	connectionLimit: 10
});

let query = function (sqlObj, cb) {
	pool.getConnection(function (err, conn) {
		if (err) {
			cb(err, null, null);
		} else {
			conn.query(sqlObj, function (err, rows) {
				conn.release();
				cb(err, rows);
			});
		}
	});
}

module.exports = query;
