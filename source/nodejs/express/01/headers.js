// headers.js

var express = require('express');

var app = express();

app.get('/headers', function (req, res) {
	res.type('text/plain');
	var s = '';
	for (var name in req.headers) {
		s += name + ': ' + req.headers[name] + '\n';
	}
	res.send(s);
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
