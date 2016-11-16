var mysql = require('mysql');
var dbConfig = require('../config/config').db;
var sqlConfig = require('../config/' + dbConfig.config);

var pool = mysql.createPool({
	host: dbConfig.host,
	port: dbConfig.port,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database,
	connectionLimit: dbConfig.connectionLimit
});

function _query (obj, cb) {
	pool.getConnection(function (err, conn) {
		if (err) {
			cb(err, null);
		} else {
			console.log('sql: ', obj.sql);
			console.log('params: ', obj.values);
			conn.query(obj, function (err, results) {
				conn.release();
				cb(err, results);
			});
		}
	});
}

function queryBySqlId () {
	var sqlId, obj, cb;
	var reg1 = /(\#\{){1}\s*\w+\s*\}{1}/g
	var reg2 = /^\s+|\s+$/g
	if (arguments.length === 2) {
		sqlId = arguments[0];
		cb = arguments[1];
	} else {
		sqlId = arguments[0];
		obj = arguments[1];
		cb = arguments[2];
	}
	var _sql = sqlConfig[sqlId];
	var _pars = _sql.match(reg1);

	var values = [];
	if (_pars && _pars.length > 0) {
		if (!obj) throw new Error('没有参数，sql中有', params.length, '个站位符.');

		var params = _sql.match(reg1).map(function (item) {
			return item.substring(2, item.length - 1).replace(reg2, '');
		});
		params.forEach(function (param) {
			values.push(obj[param]);
		});
	}
	
	var sqlObj = {
		sql: _sql.replace(reg1, '?'),
		values: values
	};

	_query(sqlObj, cb);

}

exports.queryBySqlId = queryBySqlId;
