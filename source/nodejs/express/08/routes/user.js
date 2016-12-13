// routes/user.js
const express = require('express');
const util = require('util');

let router = express.Router();

router.use(function (req, res, next) {
	util.log(req.method);
	next();
});

router.use('/:name', function (req, res, next) {
	console.log('use /user/:name  1');
	next();
}, function (req, res, next) {
	console.log('use /user/:name  2');
	next();
});

router.get('/:name', function (req, res, next) {
	let name = req.params.name;
	console.log('get /user:/name 1');
	if (name === 'adduser') {
		next('route');
	} else {
		next();
	}
}, function (req, res, next) {
	console.log('get /user:/name 2');
	next();
});

router.get('/', function (req, res) {
	res.send('user page');
});

router.get('/adduser', function (req, res) {
	res.send('add user page');
});

router.get('/upduser', function (req, res) {
	res.send('update user page');
});

module.exports = router;
