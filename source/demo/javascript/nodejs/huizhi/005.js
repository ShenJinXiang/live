// 005.js writeFile
var fs = require('fs');
var data = '005.js test write file to 005.txt';
fs.writeFile('005.txt', data, function (err) {
	if (err) {
		throw err;
	}
	console.log('successfully');
});
