const fs = require('fs');
const config = require('./config');

fs.readFile('./src/index.temp', 'utf-8', function(err, data) {
	if (err) {
		throw err;
	}
	fs.writeFile('../index.html', data, function (err) {
		if (err) 
			throw err;
	});
});
