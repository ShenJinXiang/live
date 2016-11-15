var mysql = require('mysql');
var dbConfig = require('../config/config').db;

var pool = mysql.createPool({
	host: dbConfig.host,
	port: dbConfig.port,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database,
	connectionLimit: dbConfig.connectionLimit
});

function query (obj, cb) {
	pool.getConnection(function (err, conn) {
		if (err) {
			cb(err, null);
		} else {
			console.log('sql: ', obj.sql);
			console.log('params: ', obj.values);
			conn.query(obj, function (err, results) {
				conn.release();
				cb(err, results);
			});
		}
	});
}

module.exports = query;
