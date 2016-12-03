const db = require('./dbUtil');

/*
db.queryList(function (data) {
	console.log(data);
});
db.delById('1', function () {
	db.queryList(function (data) {
		console.log(data);
	});
});
*/
db.save({
	id: '1',
	name: '赵云',
	age: 18,
	adddress: '常山'
}, function () {
	db.queryList(function (data) {
		console.log(data);
	});
});
