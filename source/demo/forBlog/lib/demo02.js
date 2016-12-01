// demo02.js
let util = require('util');
let path = require('path');
let exec = require('child_process').exec;

exec('rm -rf ' + path.join(process.cwd(), 'public'), function (err, out) {
	if (err) throw err;
	util.log(out);
});
