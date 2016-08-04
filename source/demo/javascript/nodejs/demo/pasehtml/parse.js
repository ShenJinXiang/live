var os = require('os');
var constant = require('./constant');


var mdStatus = constant.mdStatus;
var regular = constant.regular;
var utils = constant.util;

var codeStatus = mdStatus['default'];
function parse(data, callback) {
	var outData = [];
	for(var i = 0; i < data.length; i++) {
		outData.push(parseLine(data[i]));
	}
	callback(outData);
}

function parseLine(line) {
	if(codeStatus == mdStatus['default']) {
		if(line.replace(utils.space, '') == '') {
			return '<br>';
		} else if(regular['h6'].test(line)) {
			return h6(line);
		} else if(regular['h5'].test(line)) {
			return h5(line);
		} else if(regular['h4'].test(line)) {
			return h4(line);
		} else if(regular['h3'].test(line)) {
			return h3(line);
		} else if(regular['h2'].test(line)) {
			return h2(line);
		} else if(regular['h1'].test(line)) {
			return h1(line);
		} else if(regular['hr'].test(line)) {
			return '<hr>';
		} else if(regular['bs'].test(line) && regular['be'].test(line)) {
			return b(line);
		} else if(regular['ul'].test(line)) {
			return firstUl(line);
		} else if(regular['ol'].test(line)) {
			return firstOl(line);
		} else if(regular['code'].test(line)) {
			return firstCode(line);
		} else {
			return '<p>' + line + '</p>';
		}
	} else if(codeStatus == mdStatus['code']) {
		if(regular['code'].test(line)) {
			return lastCode(line);
		}
		return line;
	} else if(codeStatus == mdStatus['ul']) {
		if(line.replace(utils.space, '') == '') {
			return lastUl(line);
		}
		return ptUl(line);
	} else if(codeStatus == mdStatus['ol']) {
		if(line.replace(utils.space, '') == '') {
			return lastOl(line);
		}
		return ptOl(line);
	} else {
		return '<p>' + line + '</p>';
	}
}

function h6(line) {
	line = line.replace(utils.space, '');
	return '<h6>' + line.substring(6) + '</h6>';
}

function h5(line) {
	line = line.replace(utils.space, '');
	return '<h5>' + line.substring(5) + '</h5>';
}

function h4(line) {
	line = line.replace(utils.space, '');
	return '<h4>' + line.substring(4) + '</h4>';
}

function h3(line) {
	line = line.replace(utils.space, '');
	return '<h3>' + line.substring(3) + '</h3>';
}

function h2(line) {
	line = line.replace(utils.space, '');
	return '<h2>' + line.substring(2) + '</h2>';
}

function h1(line) {
	line = line.replace(utils.space, '');
	return '<h1>' + line.substring(1) + '</h1>';
}

function b(line) {
	line = line.replace(utils.space, '');
	return '<b>' + line.substring(2, line.length - 2) + '</b>';
}

function firstUl(line) {
	line = line.replace(utils.space, '');
	codeStatus = mdStatus['ul'];
	return '<ul>' + os.EOL +
		'<li>' + line.substr(1) + '</li>';
}

function lastUl(line) {
	codeStatus = mdStatus['default'];
	return '</ul>';
}

function ptUl(line) {
	line = line.replace(utils.space, '');
	return '<li>' + line.substr(1) + '</li>';

}

function firstOl(line) {
	line = line.replace(utils.space, '');
	codeStatus = mdStatus['ol'];
	return '<ol>' + os.EOL +
		'<li>' + line.substr(1) + '</li>';
}

function lastOl(line) {
	codeStatus = mdStatus['default'];
	return '</ol>';
}

function ptOl(line) {
	line = line.replace(utils.space, '');
	return '<ol>' + line.substr(1) + '</ol>';
}

function firstCode(line) {
	line = line.replace(utils.space, '');
	codeStatus = mdStatus['code'];
	var language = line.substr(3);
	var className;
	if(constant.language.indexOf(language) >= 0) {
		className = 'language-' + language;
	} else {
		className = 'result-code';
	}
	return '<pre class="line-numbers ' + className + '">' + os.EOL +
		'<code>';
}

function lastCode(line) {
	codeStatus = mdStatus['default'];
	return '</code>' + os.EOL + '</pre>';
}
module.exports = parse;
