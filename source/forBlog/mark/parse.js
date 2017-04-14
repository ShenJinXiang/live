var os = require('os');
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
	H1: /^[#]{1}[^#]{1}[*]*/,
	H2: /^[#]{2}[^#]{1}[*]*/,
	H3: /^[#]{3}[^#]{1}[*]*/,
	H4: /^[#]{4}[^#]{1}[*]*/,
	H5: /^[#]{5}[^#]{1}[*]*/,
	H6: /^[#]{6}[^#]{1}[*]*/,
	CODE: /^[`]{3}/
};

let getH1Test = function(line) {
	let str = line.substring(1);
	console.log(`str: ${str}`);
	return '<h1>' + stringUtil.trim(str) + '</h1>';
}

let parse = function(lines) {
	let current = CURRENT.DEFAULT;

	lines.forEach(function(line, index) {
		if (current === CURRENT.DEFAULT) {

		} else {
		}
	});
};

let regTest = function(str) {
	let h1 = regs.H1;
	let h2 = regs.H2;
	let h3 = regs.H3;
	let h4 = regs.H4;
	let h5 = regs.H5;
	let h6 = regs.H6;
	let code = regs.CODE;
	console.log(h1.test(str));
	console.log(h2.test(str));
	console.log(h3.test(str));
	console.log(h4.test(str));
	console.log(h5.test(str));
	console.log(h6.test(str));
	console.log(code.test(str));
	let html = getH1Test(str);
	console.log(html);
};

regTest("# 哈哈");
