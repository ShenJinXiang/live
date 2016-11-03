// app.js
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Shen JinXiang!</h1>');
	res.write('<a href="http://www.shenjinxiang.com">ListStar</a>');
	res.end('<p>Node.js</p>');
}).listen(3000);
console.log('HTTP server is listening at port 3000.');
