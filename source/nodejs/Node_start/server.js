var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log('request path name:', pathname);

		route(handle, pathname, res);
	}
	http.createServer(onRequest).listen(8888);
	console.log('http server listening at 8888 port.');
}

exports.start = start;
