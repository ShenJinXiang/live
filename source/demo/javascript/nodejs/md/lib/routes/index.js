// routes/index.js
let express = require('express');
let route = express.Router();

route.get('/', function (req, res) {
	res.render('login', {title: '管理系统'});
});

route.post('/validateLogin', function (req, res) {
	res.redirect('/main');
});

route.get('/main', function (req, res) {
	res.render('index', {title: '主页'});
});

module.exports = route;

