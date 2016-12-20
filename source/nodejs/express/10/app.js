// app.js
const express = require('express');
const path = require('path');
const url = require('url');
const util = require('util');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('body-parser')());

app.use(function (req, res, next) {
	let pathname = url.parse(req.url).pathname;
	util.log('请求方式:', req.method, '请求路径:', pathname);
	if ('post' === req.method || 'POST' === req.method) {
		util.log('请求参数:', req.body);
	} else if ('get' === req.method || 'GET' === req.method) {
		util.log('请求参数:', req.query);
	}
	next();
});

app.get('/', function (req, res) {
	res.render('index');
});

app.post('/doform', function (req, res) {
	console.log(req.body);
	console.log(req.files);
	res.render('index');
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
