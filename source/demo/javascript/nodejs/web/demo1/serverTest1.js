var http = require('http');
var url = require('url');

http.createServer(function(req, resp) {
	var pathname = url.parse(req.url);
	console.log(pathname);

	resp.writeHead(200, {'Content-Type': 'text/plain'});
	resp.write('hello shenjinxiang');
	resp.end();
}).listen('9999');
console.log('server start on 9999 port\n');

