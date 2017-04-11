const exec = require('child_process').exec;
const path = require('path');
const log = require('./log');

let remove = function(file) {
	exec('rm -rf ' + path.join(process.cwd(), file), function(err, stdout){
		if (err) {
			throw err;
		}
		log(`删除：${file}`);
	});
}

exports.remove = remove;
