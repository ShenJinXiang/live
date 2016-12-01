// 015.js
let exec = require('child_process').exec;

console.log('015.js start');
let child = exec('node 014.js', function (err, stdout, stderr) {
	if (err) throw err;
	console.log(stdout);
	console.log('调用014.js结束');
});
console.log('015.js end');
