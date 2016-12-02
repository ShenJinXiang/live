// server.js
const http = require('http');
const url = require('url');
const headler = require('./headler');
console.log(headler);

exports.start = function (config) {
	http.createServer(function (req, res) {
		let pathname = url.parse(req.url).pathname;
		console.log('pathname:', pathname);
		console.log('config[pathname]', config[pathname]);
		headler[config[pathname]](req, res);
	}).listen(3000);
	console.log('Server running at 3000 port.');
}
