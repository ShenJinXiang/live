// app.js

var fs = require('fs');
var url = require('url');
var express = require('express');

var app = express();

app.get('/001', onRequest);
app.get('/002', onRequest);
app.get('/003', onRequest);

function onRequest (req, res) {
	var path = url.parse(req.url).pathname;
	fs.readFile('./html/' + path + '.html', 'utf-8', function (err, data) {
		if (err) {
			console.error(err);
		}
		res.send(data);
	});
}

app.listen(3000, function () {
	console.log('app running at 3000 port.');
});
