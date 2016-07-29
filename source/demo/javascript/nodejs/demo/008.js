var http = require('http');

function onRequest(req, res){
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	res.write("<h1>申锦祥</h1>");
	res.write("<a href='http://www.shenjinxiang.com'>博客</a>");
	res.end();
}

http.createServer(onRequest).listen(8989);
console.log("服务已启动，请访问http://localhost:8989");
