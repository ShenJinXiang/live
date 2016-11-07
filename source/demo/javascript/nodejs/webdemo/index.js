var express = require('express');
var url = require('url');
var fs = require('fs');

var route = {
	'/': './htmls/index.html',
	'/001': './htmls/001.html',
	'/002': './htmls/002.html',
	'/003': './htmls/003.html'
};

var app = express();

app.get('/', onRequest);
app.get('/001', onRequest);
app.get('/002', onRequest);
app.get('/003', onRequest);

function onRequest(req, res) {
	var path = url.parse(req.url).pathname;
	console.log('path:', path);

	if(route[path]) {
		fs.readFile(route[path], 'utf-8', function (err, data) {
			if (err) {
				console.error(err);
			}
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	} else {
		res.writeHead(404);
		res.end('Not Found!');
	}
}

app.listen(3000, function (req, res) {
	console.log('app is running at port 3000');
});
