const path = require('path');
const fs = require('fs');
const log = require('./log');

let fileCount = 0;
let dirCount = 0;
let read = function(file) {
	let stat = fs.statSync(file);
	if (stat.isDirectory()) {
		dirCount++;
		log(`文件夹：${file}`);
		let files = fs.readdirSync(file);
		files.forEach(function(item) {
			let filePath = path.join(file, item);
			read(filePath);
		});
	} else {
		log(`文件：${file}`);
		fileCount++;
	}
};

let readCount = function(file) {
	fileCount = 0;
	dirCount = 0;
	read(file);
	console.log(`文件数量：${fileCount}`);
	console.log(`文件夹数量：${dirCount}`);
};

readCount(process.cwd());
