// index.js

var express = require('express');
var app = express();
app.get('/', function (req, res) {
	res.send('Node.js');
});

app.listen(3000, function () {
	console.log('app running at 3000 port.');
});
