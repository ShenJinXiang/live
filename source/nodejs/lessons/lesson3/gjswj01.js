// gjswj01.js
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

var url = "http://hd.chinatax.gov.cn/guoshui/main.jsp";

app.get('/', function (request, response, next) {
	superagent.get(url).end(function (err, res) {
		if (err) return next(err);

		var cookies = res.header['set-cookie'];
		superagent.post('http://hd.chinatax.gov.cn/guoshui/action/updateTreeType.do')
	});
});

app.listen(3000, function () {
	console.log('app running at 3000 port.');
});
