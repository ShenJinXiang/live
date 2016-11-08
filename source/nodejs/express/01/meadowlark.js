// meadowlark.js

var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var fortune = require('./lib/fortune.js');

var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	/*
	res.type('text/plain');
	res.send('Meadowlark Travel');
	*/
	res.render('home');
});

app.get('/about', function (req, res) {
	/*
	res.type('text/plain');
	res.send('About Meadowlark Travel');
	*/
	res.render('about', {fortune: fortune.getFortune()});
});

// 定制404页面
app.use(function (req, res) {
	// res.type('text/plain');
	res.status(404);
	//res.send('404-Not Found.');
	res.render('404');
});

// 定制500页面
app.use(function (err, req, res, next) {
	console.error(err.stack);
	//res.type('text/plian');
	res.status(500);
	//res.send('500- Server Error');
	res.render('500');
});

app.listen(app.get('port'), function () {
	console.log('app running at http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
