let util = require('util');
let url = require('url');

function log(req, res, next) {
	let urlObj = url.parse(req.url, true);
	let method = req.method;
	if (method === 'GET' || method === 'get') {
		util.log('url:%s', urlObj.pathname);
		util.log('params:', req.query);
	} else {
		util.log('url:%s', urlObj.pathname);
		util.log('params:', req.body);
	}
	console.log('------------------');
	next(req, res);
}

module.exports = log;
