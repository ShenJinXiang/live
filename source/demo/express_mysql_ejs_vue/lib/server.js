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

	app.use('/', require('./routes/main'));
	app.use('/person', require('./routes/person'));

	app.listen(port, function () {
		console.log(`Server running at ${port}.`);
	});
};

exports.start = start;
