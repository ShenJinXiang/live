// routes/user.js
let express = require('express');
let route = express.Router();
let dao = require('../dao/userDao');

/**
 * 跳转至用户列表页面
 */
route.get('/user', function (req, res) {
	res.render('user/index', {title: '用户列表'});
});

/**
 * 获取用户分页数据
 */
route.post('/userList', function (req, res) {
	dao.userPages(req.body, function (data) {
		res.send({message: data});
	});
});

/**
 * 添加用户 保存数据
 */
route.post('/addUser', function (req, res) {
	dao.addUser(req.body, function (data) {
		res.send(data);
	});
});

/**
 * 删除一条用户记录
 */
route.post('/deleteUser', function (req, res) {
	let userid = req.body.userid;
	dao.deleteUser(userid, function (data) {
		res.send(data);
	});
});

/**
 * 获取一条用户数据
 */
route.post('/queryOneUser', function (req, res) {
	let userid = req.body.userid;
	dao.queryOneUser(userid, function (data) {
		res.send(data);
	});
});

/**
 * 修改用户记录
 */
route.post('/updateUser', function (req, res) {
	dao.updateUser(req.body, function (data) {
		res.send(data);
	});
});

module.exports = route;
