// lib/service/employee.js

const uuid = require('node-uuid');
const mysqlUtil = require('../utils/mysqlUtil');

exports.queryList = function (departmentId, callback) {
	mysqlUtil.query({
		sql: 'select a.id, a.name, a.departmentId, (select name from department where id = a.departmentId) departmentName, a.age, a.sex, a.address, a.desc from employee a where a.departmentId = ?',
		values: [departmentId]
	}, callback);
};
