// app.js

const express = require('express');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('main');
});

app.get('/elsfk', function(req, res) {
	res.render('elsfk');
});

// 贪吃蛇
app.get('/tcs', function (req, res) {
	res.render('tcs');
});

// 写一个字
app.get('/xz', function (req, res) {
	res.render('xz');
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
