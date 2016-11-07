// users.js

var express = require('express');
var router = express.Router();

router.get('/name', function (req, res) {
	res.send('hello', req.query.username);
});

router.get('/age', function (req, res) {
	res.send('hello age', req.query.username);
});

module.exports = router;
