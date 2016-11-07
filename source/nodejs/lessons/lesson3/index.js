// index.js

var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

var url = 'https://cnodejs.org/';
app.get('/', function (requret, response, next) {
	superagent.get(url).end(function (err, res) {
		if (err) {
			return next(err);
		}
		var $ = cheerio.load(res.text);
		var titles = $('#topic_list .topic_title');
		var title = [];
		for(var index = 0; index < titles.length; index++) {
			title.push(titles.eq(index).attr('title'));
		}
		response.send(title);
	});
});

app.listen(3000, function () {
	console.log('app running at port 3000.');
});
