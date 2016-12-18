// lib/routes/employee.js

const express = require('express');
const employee = require('../service/employee');

let router = express.Router();

router.post('/queryList', function (req, res) {
	employee.queryList(req.body.departmentId, function (err, data) {
		if (err) {
			res.json({result: false, msg: err.message});
		} else {
			res.json({result: true, data: data});
		}
	});
});

module.exports = router;
