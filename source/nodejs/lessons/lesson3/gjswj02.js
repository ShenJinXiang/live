// gjswj02.js

var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

var url = "http://hd.chinatax.gov.cn/guoshui/main.jsp";
app.get('/', function (request, response, next) {
	superagent.get(url).end(function (err, res) {
		if (err) throw next(err);

		var cookies = res.header['set-cookie'];
		superagent.post('http://hd.chinatax.gov.cn/guoshui/action/InitNewArticle.do?channelId=359&name=%E5%A2%9E%E5%80%BC%E7%A8%8E&rtoken=fgk')
		.set('Cookie', cookies).end(function (err, res) {
			var $ = cheerio.load(res.text);
			var trs = $('.sv_hei>table').eq(3).find('tr');
			var data = [];
			trs.each(function (index) {
				if (index != 0) {
					var o = {
						title: $(this).find('td').eq(0).find('a').text(),
						url: $(this).find('td').eq(0).find('a').attr('href'),
						fbrq: $(this).find('td').eq(1).text(),
						wh: $(this).find('td').eq(2).text()
					};
					data.push(o);
				}
			});
			response.send(data);
		});

	});
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
