// insert.js

var mysql = require('mysql');

var insertSql = 'insert into user (`name`, `age`) values ("刘备", 46)';
var updateSql = 'update user set age = 57 where id = 4';
var deleteSql = 'delete from user where id = 4';

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'cst_gx',
	password: 'pass#word1',
	port: 3306,
	database: 'demo1'
});

conn.connect();

conn.query(deleteSql, function (err, res) {
	if(err) {
		console.error(err);
	}
	if(res) {
		console.log(res);
	}
});
conn.end();
