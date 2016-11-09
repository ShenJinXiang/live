// lib/dao/userDao.js
var query = require('../mysql/mysql');

query('select * from user', function (err, rows, fields) {
	console.log(rows);
});
