// 009.js readFile
var fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename, 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}
	console.log('------------------------------------------------------');
	console.log(data);
	console.log('------------------------------------------------------');
});
