// lib/routes/department.js

const express = require('express');
const department = require('../service/department');

let router = express.Router();

/**
 * 获取部署数据
 */
router.post('/treeData', function (req, res) {
	department.departmentTree(function (err, data) {
		if (err) {
			res.json({result: false, msg: err.message});
		} else {
			res.json({result: true, data: data});
		}
	});
});

router.post('/queryOne', function (req, res) {
	department.queryDepartmentById(req.body.id, function (err, data) {
		if (err) {
			res.json({'result': false, 'msg': err.message});
		} else {
			res.json({result: true, data: data});
		}
	});
});

router.post('/addDepartment', function (req, res) {
	department.addDepartment(req.body, function (err, data) {
		if (err) {
			res.json({result: false, msg: err.message});
		} else {
			res.json({result: true, data: {type: 'add', data: data}});
		}
	});
});

router.post('/updDepartment', function (req, res) {
	department.updDepartment(req.body, function (err, data) {
		if (err) {
			res.json({result: false, msg: err.message});
		} else {
			res.json({result: true, data: {type: 'upd', data: data}});
		}
	});
});

router.post('/delDepartment', function (req, res) {
	department.delDepartment(req.body.id, function (err, data) {
		if (err) {
			res.json({result: false, msg: err.message});
		} else {
			res.json({result: true, data: data});
		}
	});
});
module.exports = router;
