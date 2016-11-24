let http = require('http');

let url = 'http://www.shenjinxiang.com/js/main.js';
http.get(url, function (res) {
	let data = '';
	res.on('data', function (chunk) {
		data += chunk;
	});
	res.on('end', function () {
		console.log(data);
	});
});
