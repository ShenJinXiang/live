var mysqlUtil = require('./lib/mysql/mysqlUtil');


var user = {
	name: '李会计',
	username: 'kuaijili',
	password: '123456',
	email: 'likuaiji@163.com',
	age: 18,
	address: '山西太原',
	desc: '会计实习生'
};

mysqlUtil.queryBySqlId('insertUser', user, function (err, results) {
	if (err) throw err;
	console.log('------------------');
	console.log(results);
});
