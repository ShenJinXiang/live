/**
 *  /lib/server.js
 */

const express = require('express');
const path = require('path');

let start = function(port) {
	let app = express();

	app.set('views', path.join(__dirname, '../views'));
	app.set('view engine', 'ejs');

	app.use(express.static(path.join(__dirname, '../public')));

	app.use(require('body-parser')());
	app.use(require('./middleware/routeLog'));

	console.log('11');
	app.use('/', require('./routes/main'));
	console.log('22');

	app.listen(port, function () {
		console.log(`Server running at ${port}.`);
	});
};

exports.start = start;
