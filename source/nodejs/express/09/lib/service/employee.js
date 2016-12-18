// lib/service/employee.js

const uuid = require('node-uuid');
const mysqlUtil = require('../utils/mysqlUtil');

exports.queryList = function (departmentId, callback) {
	mysqlUtil.query({
		sql: 'select a.id, a.name, a.departmentId, (select name from department where id = a.departmentId) departmentName, a.age, a.sex, a.address, a.desc from employee a where a.departmentId = ?',
		values: [departmentId]
	}, callback);
};

exports.addEmployee = function (obj, callback) {
	obj.id = uuid.v4();
	mysqlUtil.save('employee', obj, callback);
};

exports.delEmployee = function (id, callback) {
	mysqlUtil.delById('employee', id, callback);
}

exports.updEmployee = function (obj, callback) {
	delete obj.departmentId;
	mysqlUtil.update('employee', obj, callback);
}

exports.queryOne = function (id, callback) {
	mysqlUtil.query ({
		sql: 'select a.id, a.name, a.departmentId, (select name from department where id = a.departmentId) departmentName, a.age, a.sex, a.address, a.desc from employee a where a.id = ?',
		values: [id]
	}, function (err, data) {
		if (err) {
			callback(err);
		} else {
			if (data.length !== 1) {
				callback(new Error('返回记录不正确'));
			} else {
				callback(null, data[0]);
			}
		}
	});
}
