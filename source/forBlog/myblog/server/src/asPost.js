const path = require('path');
const fsUtil = require('./fsUtil');
const config = require('../config');

let fileList = function() {
	let fileArr = fsUtil.readdir(path.join(process.cwd(), config.src));
	let reg = /(.md)$/
	fileArr = fileArr.filter(function(item) {
		return reg.test(item);
	});
	return fileArr;
};

let asPost = function(file) {
	let filePath = path.join(process.cwd(), config.src, file);
	fsUtil.readLines(filePath, function(lines) {
		lines.forEach(function(line) {
		});
	});
};

exports.fileList = fileList;
exports.asPost = asPost;
