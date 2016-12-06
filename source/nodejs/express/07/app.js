// app.js
const express = require('express');

let app = express();

app.get('/', function (req, res) {
	res.type('text/plian');
	res.send('index');
});

app.get('/about', function (req, res) {
	res.type('text/plain');
	res.send('about');
});

/**
 * 404 页面
 */
app.use(function (req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found.');
});

/**
 * 500 页面
 */
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error.');
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});

