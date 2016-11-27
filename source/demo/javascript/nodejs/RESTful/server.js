var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var users = require('./lib/users');

app.get('/listUsers', function (req, res) {
	res.type('text/plain');
	res.send(users);
});

var server = app.listen(3000, function () {
	console.log('应用启动，地址：http://localhost:3000');
});
