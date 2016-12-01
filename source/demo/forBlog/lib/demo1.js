// demo1.js

let fs = require('fs');
let path = require('path');
let util = require('util');
let exec = require('child_process').exec;

let cwd = process.cwd();

let sie = fs.existsSync(path.join(cwd, 'source'));
if (!sie) {
	throw new Error('source目录不存在');
}

// 删除public目录
exec('rm -rf ' + path.join(cwd, 'public'), function (err) {
	if (err) {
		throw new Error('删除public目录失败');
	}
	fs.mkdir(path.join(cwd, 'public'), function (err) {
		util.log('创建public/');

		fs.readdir(path.join(cwd, 'source'), function (err, files) {
			if (err) {
				throw err;
			}
			if (files.length > 0) {
				for (let i = 0; i < files.length; i++) {
					let thispath = path.join(cwd, 'publc', files[i]);
				}
			}
		});
	});
});


