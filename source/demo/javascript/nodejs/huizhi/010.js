// 010.js unlink
var fs = require('fs');

var filename = process.argv[2];

fs.unlink(filename, function (err) {
	if (err) throw err;
	console.log('successfully');
});
