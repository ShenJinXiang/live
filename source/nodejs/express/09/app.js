// app.js
const express = require('express');
const path = require('path');
const url = require('url');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * 引入express-session
 */
app.use(require('express-session')({
	secret: 'shenjinxiang',
	saveUninitialized: true
}));

/**
 * 引入body-parser
 */
app.use(require('body-parser')());

/**
 * 引入路由日志
 */
app.use(require('./lib/middleware/routeLog'));

/**
 * 登录拦截器
 */
app.use(require('./lib/middleware/loginFilter'));


app.get('/main', function (req, res) {
	res.render('main', {username: req.session.currentUser.username});
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
