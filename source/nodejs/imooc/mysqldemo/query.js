var mysql = require('mysql');


function queryList (sql, cb) {
	var conn = mysql.createConnection({
		host: 'localhost',
		user: 'cst_gx',
		password: 'pass#word1',
		port: 3306,
		database: 'demo1'
	});
	conn.connect();
	conn.query(sql, function (err, rows, fields) {
		if (err) {
			console.error(err);
		}
		if (rows) {
			var data = [];
			rows.forEach(function (rItem, rIndex) {
				var o = {};
				fields.forEach(function (fItem, fIndex) {
					o[fItem.name] = rItem[fItem.name];
				});
				data.push(o);
			});
	
			cb(data);
		}
	});
	
	conn.end();
}

exports.queryList = queryList;
