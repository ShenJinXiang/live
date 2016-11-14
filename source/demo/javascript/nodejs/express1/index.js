// index.js

var express = require('express');

var app = express();

// app.use(express.logger());
app.use(require('body-parser')());


app.all('*', function (req, res, next) {
	console.log('all *');
	next();
});


/*
app.use(function (req, res, next) {
	console.log('请求方式：', req.method);
	console.log('请求路径：', req.url);
	if (req.method === 'GET' || req.method === 'get') {
		console.log('请求参数：', req.query);
	}
	if (req.method === 'POST' || req.method === 'post') {
		console.log('请求参数：', req.body());
	}

	console.log('req.params:', req.params);
	next();
});
*/

app.get('/', function (req, res) {
	res.type('text/plian');
	res.send('node.js');
});

app.get('/user', function (req, res) {
	res.send('user pages');
});
app.listen(3000, function() {
	console.log('Server running at 3000 port.');
});
