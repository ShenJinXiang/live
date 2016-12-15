// lib/utils/mysqlUtil.js
const mysql = require('mysql');
const dbConfig = require('../Config').mysql;

let pool = mysql.createPool(dbConfig);

exports.query = function (sql, callback) {
	console.log(sql);
	pool.getConnection(function (err, conn) {
		if (err) {
			callback(err);
		} else {
			conn.query(sql, function (err, rows, fields) {
				conn.release();
				callback(err, rows, fields);
			});
		}
	});
};
