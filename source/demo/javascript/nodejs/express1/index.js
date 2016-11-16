// index.js

var express = require('express');

var app = express();

// body-parser
app.use(require('body-parser')());

app.use(require('./lib/middlewares/logger')());

app.listen(3000, function() {
	console.log('Server running at 3000 port.');
});
