var mysql = require('mysql');
var dbConfig = require('./config').db;

var pool = mysql.createPool(dbConfig);

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
