// 008.js rename 
var fs = require('fs');

var _old = process.argv[2];
var _new = process.argv[3];
fs.rename(_old, _new, function (err) {
	if (err) throw err;
	console.log("successfully");
});
