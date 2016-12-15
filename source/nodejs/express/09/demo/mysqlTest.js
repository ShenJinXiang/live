const mysqlUtil = require('../lib/utils/mysqlUtil');


/*
mysqlUtil.findById('user', 'id', '1123', function (err, data) {
	if (err) throw err;
	console.log(data);
});

mysqlUtil.save('user', [], function (err, data) {
	if (err) throw err;
	console.log(data);
});
*/

mysqlUtil.query({sql: 'select * from user '}, function (err, data) {
	if (err) throw err;
	console.log(data);
});

/*
mysqlUtil.update('user', {
	id: 5,
	name: '张三丰',
	age: 125,
	address: '武当山'
}, function (err, data) {
	if (err) throw err;
	console.log(data);
});

mysqlUtil.delById('user', 2, function (err, data) {
	if (err) throw err;
	console.log(data);
});
*/
