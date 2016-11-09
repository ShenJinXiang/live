// index.js

var express = require('express');
var path = require('path');

var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('body-parser')());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
