// lib/middleware/loginFilter.js
const noLogin = require('../config').noLogin;
const url = require('url');

module.exports = function (req, res, next) {
	let pathname = url.parse(req.url).pathname;
	if (noLogin.indexOf(pathname) < 0 && !req.session.currentUser) {
		res.redirect('/');
	} else {
		next();
	}
};
