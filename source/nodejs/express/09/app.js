// app.js
const express = require('express');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(require('cookie-parser')('sctalk admin manager'));
// app.use(require('cookie-parser')());
app.use(require('express-session')({
	secret: 'shenjinxiang',
	name: 'testapp',
	resave: false,
	saveUninitialized: true
}));
app.use(require('body-parser')());
app.get('/', function(req, res) {
	res.render('index', {title: 'shenjinxiang'});
});

app.post('/login', function (req, res) {
	let username = req.body.username;
	let password = req.body.password;
	console.log(username);
	console.log(password);
	req.session.userInfo = {username: username, password: password};
	res.redirect('/main');
});

app.get('/main', function (req, res) {
	res.render('main', {username: req.session.userInfo.username});
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
