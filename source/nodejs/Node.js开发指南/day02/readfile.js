// readfile.js

var fs = require('fs');

fs.readFile('./event.js', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
