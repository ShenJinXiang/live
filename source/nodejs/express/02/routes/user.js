// routes/user.js
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	var option = {
		userList: [
			{name: '张三', age: 18, address: '北京'},
			{name: '李四', age: 28, address: '山东'},
			{name: '王五', age: 24, address: '上海'},
			{name: '朱六', age: 32, address: '太原'}
		],
		title: '人员列表'
	};
	res.render('user/user', option);
});

router.get('/add', function (req, res) {
	res.render('user/add');
});

router.get('/update', function (req, res) {
	res.render('user/update');
});

router.get('/delete', function (req, res) {
	res.render('user/delete');
});

module.exports = router;
