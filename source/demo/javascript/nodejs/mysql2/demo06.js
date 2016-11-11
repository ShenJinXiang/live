// demo06.js 插入操作

var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '6098',
	port: 3306,
	database: 'demo1'
});

conn.connect();

var sql = 'delete from user where id = ?';
conn.query(sql, [2], function (err, results) {
	if (err) throw err;
	console.log(results);
});

	conn.query('select * from user', function (err1, rows) {
		if (err1) throw err1;
		console.log(rows);
	});
conn.end();


