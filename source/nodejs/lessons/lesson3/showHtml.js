// showHtml.js

var fs = require('fs');
var cheerio = require('cheerio');

fs.readFile('./001.html', 'utf-8', function (err, data) {
	if (err) {
		console.error(err);
	}
	console.log(data);
	console.log('--------');

	var $ = cheerio.load(data);
	console.log($('#div1').html());

});
