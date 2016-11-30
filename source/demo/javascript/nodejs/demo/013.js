// 013.js

let cp = require('child_process');

let cmd = 'date';

cp.exec(cmd, function (err, stdout, stderr) {
	if (err) {
		console.log('get weather api error:' + stderr);
	} else {
		console.log(JSON.parse(stdout));
	}
});
