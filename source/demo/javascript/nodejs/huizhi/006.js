// 006.js appendFile
var fs = require('fs');
var data = '\n\n append file\n005.js test write file to 005.txt\n';
fs.appendFile('005.txt', data, function (err) {
	if (err) {
		throw err;
	}
	console.log('successfully');
});

