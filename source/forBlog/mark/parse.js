let os = require('os');
const stringUtil = require('./stringUtil');

const CURRENT = {
	DEFAULT: 0,
	CODE: 1,
	LINE_CODE: 2,
	UL: 3,
	OL: 4,
	TABLE: 5
};

const regs = {
	H1: /^[\s]*[#]{1}[^#]{1}.*/,
	H2: /^[\s]*[#]{2}[^#]{1}.*/,
	H3: /^[\s]*[#]{3}[^#]{1}.*/,
	H4: /^[\s]*[#]{4}[^#]{1}.*/,
	H5: /^[\s]*[#]{5}[^#]{1}.*/,
	H6: /^[\s]*[#]{6}[^#]{1}.*/,
	HR: /^[\s]*([*]{3}||[-]{3})[\s]*$/,
	UL: /^[*]{1}[^*]{1}.*$/,
	OL: /^[\d]+[\.]{1}[^.]{1}.*$/,
	CODE: /^[\s]*[`]{3}.*$/,
	A: /\[.*\]\(.+\)/g,
	IMG: /^\s*\!\[.*\]\(.+\)\s*$/
};

let h1 = function(line) {
	let str = line.substring(1);
	console.log(`str: ${str}`);
	return '<h1>' + stringUtil.trim(str) + '</h1>';
}

let h2 = function(line) {
	let str = line.substring(2);
	console.log(`str: ${str}`);
	return '<h2>' + stringUtil.trim(str) + '</h2>';
}

let h3 = function(line) {
	let str = line.substring(3);
	console.log(`str: ${str}`);
	return '<h3>' + stringUtil.trim(str) + '</h3>';
}

let h4 = function(line) {
	let str = line.substring(4);
	console.log(`str: ${str}`);
	return '<h4>' + stringUtil.trim(str) + '</h4>';
}

let h5 = function(line) {
	let str = line.substring(5);
	console.log(`str: ${str}`);
	return '<h5>' + stringUtil.trim(str) + '</h5>';
}

let h6 = function(line) {
	let str = line.substring(6);
	console.log(`str: ${str}`);
	return '<h6>' + stringUtil.trim(str) + '</h6>';
}

function isArray(o) {
	return Object.prototype.toString.call(o) == '[object Array]';
}

// ----------------------------------------------------------------------

let currentStatus = {
	status: CURRENT.DEFAULT,
	index: 0,
	line: '',
	lines: []
};

let parse = function(lineArr) {
	let datas = [];
	currentStatus.lines = lineArr;
	currentStatus.lines.forEach(function(line, index) {
		currentStatus.line = line;
		currentStatus.index = index;
		datas.push(parseLine());
	});
	return datas;
};

function parseLine() {
	return currentStatus.line;
}


module.exports = parse;
