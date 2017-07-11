const fs = require('fs');
const util = require('util');
const path = require('path');

let read = function(fname) {
	fname = path.join(__dirname, fname);
	try {
		let data = fs.readFileSync(fname, 'utf-8');
		return JSON.parse(data);
	} catch (err) {
		util.log(`读取文件：${fname} 出错，${err.message}`);
	}
};

let write = function(fname, data) {
	fname = path.join(__dirname, fname);
	try {
		fs.writeFileSync(fname, data);
	} catch (err) {
		util.log(`写入文件：${fname} 出错，${err.message}`);
	}
};

let add = function(fname, obj) {
	try {
		let data = read(fname);
		data.unshift(obj);
		let dataStr = JSON.stringify(data);
		write(fname, dataStr);
	} catch (err) {
		util.log(`文件：${fname} 添加信息出错，${err.message}`);
	}
};

let find = function(fname, id) {
	try {
		let data = read(fname);
		for(let i = 0; i < data.length; i++) {
			if (data[i].id === id) {
				return data[i];
			}
		}
	} catch (err) {
		util.log(`文件：${fname} 查找一条信息出错，${err.message}`);
	}
};

let findIndex = function(fname, id) {
	try {
		let data = read(fname);
		for(let i = 0; i < data.length; i++) {
			if (data[i].id === id) {
				return i;
			}
		}
	} catch (err) {
		util.log(`文件：${fname} 查找一条信息出错，${err.message}`);
	}
};

let deleteById = function(fname, id) {
	try {
		let index = findIndex(fname, id);
		let data = read(fname);
		data.splice(index, 1);
		let dataStr = JSON.stringify(data);
		write(fname, dataStr);
	} catch (err) {
		util.log(`文件：${fname} 删除信息出错，${err.message}`);
	}
};

let edit = function(fname, obj) {
	try {
		let data = read(fname);
		for (let i = 0; i < data.length; i++) {
			if (data[i].id === obj.id) {
				data[i] = obj;
			}
		}
		let dataStr = JSON.stringify(data);
		write(fname, dataStr);
	} catch (err) {
		util.log(`文件：${fname} 修改信息出错，${err.message}`);
	}
};

exports.read = read;
exports.write = write;
exports.add = add;
exports.find = find;
exports.deleteById = deleteById;
exports.edit = edit;
