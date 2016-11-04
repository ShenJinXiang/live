// server.js
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('<h1>Node.js</h1>');
	res.end('Shen JinXiang!');
}).listen(8888, 'localhost');

console.log('Server running at http://localhost:8888/');
