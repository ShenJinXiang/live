const d2 = require('./demo2');

d2.queryList(function (data) {
	console.log(data);
});

/*

d2.queryById('2', function (data) {
	console.log('------');
	console.log('id', data.id);
	console.log('name', data.name);
	console.log('age', data.age);
	console.log('address', data.address);
});
d2.save({
	'id': '4',
	'name': '赵云',
	'age': 18,
	'address': '常山'
}, function () {
	d2.queryList(function (data) {
		console.log(data);
	});
});
*/
/*
{"1":{"id":"1","name":"刘备","age":35,"address":"四川"},"2":{"id":"2","name":"武松","age":22,"address":"青州"},"4":{"id":"4","name":"赵云","age":18,"address":"常山"}}
d2.delById('3', function () {
	d2.queryList(function (data) {
		console.log(data);
	});
});
*/
