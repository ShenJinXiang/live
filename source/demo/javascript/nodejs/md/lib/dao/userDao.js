// dao/userDao.js
let query = require('../mysqlUtil/mysqlUtil');
let uuid = require('node-uuid');

exports.queryUser = function (cb) {
	query('select id as userid, name, age, address, desc from user', function (err, rows) {
		if (err) throw err;
		cb(rows);
	});
};

exports.userPages = function (obj, cb) {
	let limit = obj.limit;
	let page = obj.page;
	let start = (page - 1) * limit;

	query('select count(1) cn from user', function (err, rows) {
		if (err) throw err;
		let count = rows[0].cn;
		query('select `id` as userid, `name`, `age`, `address`, `desc` from user limit ' + start + ', ' + limit + '', function (err, rows) {
			if (err) throw err;
			let message = {
				list: rows,
				pageNumber: page,
				totalPage: Math.ceil(count / limit),
				totalRow: count
			};
			cb(message);
		});

	});
}

exports.addUser = function (obj, cb) {
	query({
		sql: 'insert into user (`id`, `name`, `username`, `password`, `age`, `address`, `desc`, `email`) values (?, ?, ?, ?, ?, ?, ?, ?)',
		values: [uuid.v4(), obj.name, obj.username, obj.password, obj.age, obj.address, obj.desc, obj.email]
	}, function (err, rows) {
		let message;
		if (!err) {
			message = {
				result: true,
				msg: ''
			};
		} else {
			message = {
				result: false,
				msg: err
			};
		}
		cb(message);
	});
};

exports.deleteUser = function (userid, cb) {
	query({
		sql: 'delete from user where id = ?',
		values: [userid]
	}, function (err, rows) {
		let message = {};
		if (err) {
			message.result = false;
			message.msg = err;
		} else {
			message.result = true;
			message.msg = '';
		}
		cb(message);
	});
};

exports.queryOneUser = function (userid, cb) {
	query({
		sql: 'select * from user where id = ?',
		values: [userid]
	}, function (err, rows) {
		if (err) throw err;
		cb(rows[0]);
	});
};

exports.updateUser = function (obj, cb) {
	query({
		sql: 'update user set `name` = ?, `age` = ?, `address` = ?, `email` = ?, `username` = ?, `password` = ?, `desc` = ? where `id` = ?',
		values: [obj.name, obj.age, obj.address, obj.email, obj.username, obj.password, obj.desc, obj.userid]
	}, function (err, rows) {
		let message = {};
		if (err) {
			message.result = false;
			message.msg = err;
		} else {
			message.result = true;
			message.msg = '';
		}
		cb(message);
	});
};
