// routes/user.js
let express = require('express');
let route = express.Router();
let dao = require('../dao/userDao');

route.get('/userList', function (req, res) {
	dao.queryUser(function (rows) {
		let obj = {
			title: '用户列表',
			data: rows
		};
		res.render('user/index', obj);
	});
});
module.exports = route;
