var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var app = express();

var urlPath = 'https://cnodejs.org/';

app.get('/', function (request, response, next) {
	superagent.get(urlPath, function (err, res) {
		if (err) {
			return next(err);
		}
		var $ = cheerio.load(res.text);
		var data = [];
		$('#topic_list .cell').each(function (item) {
			var $element = $(this);
			var o = {
				author: {
					name: $element.find('.user_avatar img').attr('title'),
					avatar: $element.find('.user_avatar img').attr('src'),
					href: url.resolve(urlPath, $element.find('.user_avatar').attr('href'))
				},
				title: $element.find('.topic_title').attr('title'),
				href: url.resolve(urlPath, $element.find('.topic_title').attr('href'))
			};
			data.push(o);
		});
		response.send(data);
	});
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
