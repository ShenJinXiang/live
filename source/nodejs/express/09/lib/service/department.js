// lib/service/department.js
const uuid = require('node-uuid');
const mysqlUtil = require('../utils/mysqlUtil');

exports.departmentTree = function (callback) {
	mysqlUtil.query('select * from department', callback);
};
