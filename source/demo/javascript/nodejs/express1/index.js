// index.js

var express = require('express');
var path = require('path');

var routes = require('./lib/router/index.js')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
// body-parser
app.use(require('body-parser')());
app.use('/', routes);

// logger
app.use(require('./lib/middlewares/logger')());

app.listen(3000, function() {
	console.log('Server running at 3000 port.');
});
