const mysql = require('mysql');
const dbConfig = require('./config');

let pool = mysql.createPool(dbConfig);
console.log(pool);

pool.getConnection(function(err, conn) {
	if (err) throw err;
	console.log(`getConn: ${conn.threadId}`);
});

pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});
console.log(pool);
