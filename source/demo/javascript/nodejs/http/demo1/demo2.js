const fs = require('fs');

let filepath = './db.json'

let queryList = exports.queryList = function (callback) {
	fs.readFile(filepath, 'utf-8', function (err, data) {
		if (err) throw err;
		let obj = {};
		if (data) {
			obj = JSON.parse(data);
		}
		callback(obj);
	});
};

let queryById = exports.queryById = function (id, callback) {
	queryList(function (obj) {
		let data = obj[id];
		callback(data);
	});
};

let save = exports.save = function (obj, callback) {
	queryList(function (data) {
		data[obj.id] = {
			"id": obj.id,
			"name": obj.name,
			"age": obj.age,
			"address": obj.address
		};

		fs.writeFile(filepath, JSON.stringify(data), function(err) {
			if (err) throw err;
			callback();
		});
	});
};

let delById = exports.delById = function (id, callback) {
	queryList(function (data) {
		delete data[id];

		fs.writeFile(filepath, JSON.stringify(data), function(err) {
			if (err) throw err;
			callback();
		});
	});
};
