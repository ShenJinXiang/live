// routes/index.js
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	var option = {
		title: 'EXPRESS',
		name: 'ShenJinXiang',
		content: '业精于勤荒于嬉'
	};
	res.render('index', option);
});

module.exports = router;
