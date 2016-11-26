// dao/userDao.js
let query = require('../mysqlUtil/mysqlUtil');

let queryUser = function (cb) {
	query('select * from user', function (err, rows) {
		if (err) throw err;
		cb(rows);
	});
};

exports.queryUser = queryUser;
