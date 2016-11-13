// demo10.js

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
var updateSql = 'update user set name = ?, age = ? where id = ?';
conn.beginTransaction(function (err) {
	if (err) throw err;
	conn.query(insertSql, ['卡卡西', 24], function (err, result) {
		if (err) {
			return conn.rollback(function () {
				throw err;
			});
		}
		console.log(result);

		conn.query(updateSql, ['武松', 27, 1], function (err, result) {
			if (err) {
				return conn.rollback(function () {
					throw err;
				});
			}
			console.log(result);
			conn.commit(function (err) {		
				if (err) {
					return conn.rollback(function () {
						throw err;
					});
				}
				console.log('success!');
			});
		});
	});

});

