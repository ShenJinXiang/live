const fs = require('fs');
const path = require('path');
const log = require('./log');

let mkdirsSync = function(dirpath) {
	try {
		if (!fs.existsSync(dirpath)) {
			mkdirsSync(path.dirname(dirpath));
			fs.mkdirSync(dirpath);
		}
	} catch (err) {
		throw err;
	}
};

let writeFile = function() {
	let dirpath = arguments[0];
	let fname = (arguments.length === 2) ? 'index.html' : arguments[1];
	let content = (arguments.length === 2) ? arguments[1] : arguments[2];
	let filePath = path.join(dirpath, fname);
	if (!fs.existsSync(dirpath)) {
		mkdirsSync(dirpath);
		log(`目录创建：${dirpath}`);
	}

	fs.writeFile(filePath, content, function(err) {
		if (err) {
			log (`文件：${filePath} 写入错误`);
			log(`错误信息：${err.message}`);
			log(`错误地址：${err.stack}`);
		} else {
			log(`写入文件：${filePath}`);
		}
	});
};

let readFile = function(filePath) {
	try {
		let content = fs.readFileSync(filePath, {encoding: 'utf-8'});
		log(`读取文件：${filePath}`);
		return content;
	} catch (err) {
		log(`文件：${filePath} 读取错误`);
		log(`错误信息：${err.message}`);
		log(`错误地址：${err.stack}`);
	}
}

exports.mkdirsSync = mkdirsSync;
exports.writeFile = writeFile;
exports.readFile = readFile;
