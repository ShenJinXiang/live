// demo07.js 插入操作

var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '6098',
	port: 3306,
	database: 'demo1'
});

conn.connect();

var sql = '';
conn.query({
	sql: 'update user set name = ?, age = ? where id = ?',
	timeout: 10000, // 10秒超时
	values: ['赵云', 21, 3]
}, function (err, results) {
	if (err) throw err;
	console.log(results);
});

	conn.query('select * from user', function (err1, rows) {
		if (err1) throw err1;
		console.log(rows);
	});
conn.end();



