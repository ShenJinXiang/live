const mysql = require('mysql');
const dbConfig = require('./config');

let conn = mysql.createConnection(dbConfig);
conn.connect();

conn.query('select * from employee', function(err, data) {
	if (err) throw err;
	console.log(data);
	conn.end();
});
