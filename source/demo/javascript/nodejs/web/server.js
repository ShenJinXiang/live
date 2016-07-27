var http = require('http');
var url = require('url');

function start(route) {
	function onRequest(request, response) {
		var pathName = url.parse(request.url).pathname;

		route(pathName);

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('hello shenjinxiang');
		response.end();
	}

	http.createServer(onRequest).listen('9999');
	console.log('server start on 9999 port\n');
}

exports.start = start;
