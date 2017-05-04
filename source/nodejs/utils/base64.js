const fs = require('fs');

let encodeStr = function(str) {
	let b = Buffer.from(str);
	return b.toString('base64');
};

let decodeStr = function(str) {
	let b = Buffer.from(str, 'base64');
	return b.toString();
};

let encodeFile = function(file, callback) {
	fs.readFile(file, (err, data) => {
		if (err) {
			console.log(`文件：${file} 读取错误`);
			console.log(`错误信息：${err.message}`);
			console.log(`错误地址：${err.stack}`);
			callback(err);
		} else {
			let b = Buffer.from(data);
			callback(null, b.toString('base64'));
		}
	});
};

let encodeFileSync = function(file) {
	try {
		let data = fs.readFileSync(file);
		let b = Buffer.from(data);
		return b.toString('base64');
	} catch (err) {
		console.log(`文件：${file} 读取错误`);
		console.log(`错误信息：${err.message}`);
		console.log(`错误地址：${err.stack}`);
	}
};

let decodeFile = function(file, data, callback) {
	let b = Buffer.from(data, 'base64');
	fs.writeFile(file, b, (err) => {
			if (err) {
				console.log(`文件：${file} 写入错误`);
				console.log(`错误信息：${err.message}`);
				console.log(`错误地址：${err.stack}`);
				callback(err);
			} else {
				console.log(`文件：${file} 写入成功`);
				callback();
			}
	});
};

let decodeFileSync = function(file, data) {
	let b = Buffer.from(data, 'base64');
	try {
		fs.writeFileSync(file, b);
		console.log(`文件：${file} 写入成功`);
	} catch (err) {
			console.log(`文件：${file} 写入错误`);
			console.log(`错误信息：${err.message}`);
			console.log(`错误地址：${err.stack}`);
	}
};

