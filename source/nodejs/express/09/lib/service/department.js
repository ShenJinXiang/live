// lib/service/department.js
const uuid = require('node-uuid');
const mysqlUtil = require('../utils/mysqlUtil');

exports.departmentTree = function (callback) {
	mysqlUtil.query('select * from department', callback);
};

exports.queryDepartmentById = function (id, callback) {
	mysqlUtil.query({
		sql: 'select a.id, a.name, a.pId, (select name from department where id = a.pId) pName from department a where a.id = ?',
		values: [id]
	}, function (err, data) {
		if (err) {
			callback(err);
		} else {
			if (data.length !== 1) {
				callback(new Error('返回记录数量不正确'), data);
			} else {
				callback(null, data[0]);
			}
		}
	});
};

exports.addDepartment = function (obj, callback) {
	obj.pId = obj.pId || null;
	obj.id = uuid.v4();
	mysqlUtil.save('department', obj, function (err, data) {
		if (err) {
			callback(err);
		} else {
			mysqlUtil.findById('department', obj.id, callback);
		}
	});
};

exports.updDepartment = function (obj, callback) {
	mysqlUtil.query({
		sql: 'update department set name = ? where id = ?',
		values: [obj.name, obj.id]
	}, function (err, data) {
		if (err) {
			callback(err);
		} else {
			mysqlUtil.findById('department', obj.id, callback);
		}
	});
}
