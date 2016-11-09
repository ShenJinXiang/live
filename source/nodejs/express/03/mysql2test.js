var query = require('./mysql2');

var sql = 'select * from user';
query(sql, function (err, rows, fields) {
	if (err) {
		console.error(err);
	} else {
		console.log(rows);
	}
});
