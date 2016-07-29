var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
	res.write('hello node.js');
	res.write("申锦祥");
	res.end();
}).listen(9999);
console.log('server start on 9999 port ^_^ ');
