const mysqlUtil = require('../lib/utils/mysqlUtil');

mysqlUtil.query({sql: 'select * from user where id = ?', values: [1123]}, function (err, data) {
	if (err) throw err;
	console.log(data);
});
