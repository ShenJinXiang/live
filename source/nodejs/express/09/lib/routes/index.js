const express = require('express');
let router = express.Router();

/**
 * 登录、注册页面
 */
router.get('/', function (req, res) {
	res.render('index');
});

/**
 * 登录验证
 */
router.post('/loginValidate', function (req, res) {
});

/**
 * 注册用户
 */
router.post('/register', function (req, res) {
});

/**
 * 登出
 */
router.get('/logout', function (req, res) {
});

/**
 * 主页面
 */
router.get('/main', function (req, res){
});

module.exports = router;
