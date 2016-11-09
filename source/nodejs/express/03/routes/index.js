// routes/index.js

var express = require('express');
var route = express.Router();

route.get('/', function (req, res) {
	res.render('index', {title: 'Express'});
});

route.post('/login', function (req, res) {
	console.log(req.query);
	console.log(req.body);
	console.log(req.params);
	var username = req.body.username;
	var password = req.body.password;
	console.log('username:', username, ' password:', password);
	if (username == 'admin' && password == '123456') {
		res.redirect('/main');
	} else {
		res.redirect('/');
	}
});

route.get('/main', function (req, res) {
	res.render('main');
});

route.post('/ajax/test', function (req, res) {
	if(req.xhr) {
		var name = req.body.name;
		var word = req.body.word;
		console.log("name:", name, "word:", word);
		res.send({'msg': '成功'});
	} else {
		res.send({'msg': '不是ajax'});
	}
});

module.exports = route;
