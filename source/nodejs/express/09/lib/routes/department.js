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

module.exports = router;
