// index.js

var mysql = require('mysql');

var insertSql = 'insert into user (`name`, `age`, `address`) values ("hehe", 24, "上海")';
var updateSql = 'update user set name = "刘备",  age=46 where id = 1';
var deleteSql = 'delete from user where id = 4';
var querySql = 'select * from user';

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '6098',
	database: 'nodejs',
	port: 3306
});

conn.connect();

conn.query(deleteSql, function (err, rows, fields) {
	if (err) {
		console.error(err);
	}

	console.log('-----------------rows-------------');
	console.log(rows);
});
conn.end();
