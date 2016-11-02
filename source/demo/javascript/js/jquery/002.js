var http = require("http");
http.createServer(function(req, resp) {
	resp.writeHead(200);
	resp.write("{x: 1, y: 2, z: 3}");
	resp.end();
}).listen(8080);
