const express = require('express');
const util = require('util');
const querystring = require('querystring');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(function (req, res, next) {
	console.log('11111');
	next();
	//console.log(util.inspect(res, false, null));
	console.log(res.text);
});

app.get('/user', function (req, res) {
	let obj = {
			'name': 'shenjinxiang',
			'age': 30,
			'address': '太原'
	};
	console.log(obj);
	res.render('index', obj);
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
