// index.js

var express = require('express');
var path = require('path');

// routes


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('body-parser')());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('index', {title: 'express'});
});

app.post('/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	console.log('username:', username, ' passowrd:', password);
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
