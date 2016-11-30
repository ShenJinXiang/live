// demo1.js
let express = require('express');
let superagent = require('superagent');
let cheerio = require('cheerio');

//let url1 = 'https://cnodejs.org/';
//let url1 = 'http://hd.chinatax.gov.cn/guoshui/main.jsp';
let url = 'https://github.com/shenjinxiang';

let app = express();

app.get('/', function (request, response) {
	superagent.get(url).set('Cookie', 'user_session=Al05NvCFAegrsfeRF5tjM_G-hikgPkK3zlp0GcNkwUt_RT8GWD6TTxuuFMe0zmtaRgTsPBJXCyOyncBV; path=/; expires=Wed, 14 Dec 2016 08:52:31 -0000; secure; HttpOnly__Host-user_session_same_site=Al05NvCFAegrsfeRF5tjM_G-hikgPkK3zlp0GcNkwUt_RT8GWD6TTxuuFMe0zmtaRgTsPBJXCyOyncBV; path=/; expires=Wed, 14 Dec 2016 08:52:31 -0000; secure; HttpOnly') 
	.end(function (err, res) {
		if (err) throw err;
		let $ = cheerio.load(res.text);
		let titles = [];
		$('ol.pinned-repos-list').find('li').each(function (item) {
			titles.push($(item).find('span.d-block').html());
		});
		console.log(titles);
		response.send(res.text);
	});
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
