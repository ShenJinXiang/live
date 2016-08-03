var os = require('os');
var constant = require('./constant');

var codeStatus = constant.mdStatus['default'];
var space = constant.util.space;
function h6(line) {
	line = line.replace(space, '');
	return '<h6>' + line.substr(6)+ '</h6>' + os.EOL;
}

function h5(line) {
	line = line.replace(space, '');
	return '<h5>' + line.substr(5)+ '</h5>' + os.EOL;
}

function h4(line) {
	line = line.replace(space, '');
	return '<h4>' + line.substr(4)+ '</h4>' + os.EOL;
}

function h3(line) {
	line = line.replace(space, '');
	return '<h3>' + line.substr(3)+ '</h3>' + os.EOL;
}

function h2(line) {
	line = line.replace(space, '');
	return '<h2>' + line.substr(2)+ '</h2>' + os.EOL;
}

function h1(line) {
	line = line.replace(space, '');
	return '<h1>' + line.substr(1)+ '</h1>' + os.EOL;
}

function hr(line) {
	return '<hr/>' + os.EOL;
}

function b(line) {
	line = line.replace(space, '');
	return '<b>' + line.substr(2, line.length - 2)+ '</b>' + os.EOL;
}

function ul(line) {
	line = line.replace(space, '');
	if(codeStatus == constant.mdStatus['default']) {
		condeStatus = constant.mdStatus['ul'];
		return '<ul>' + os.EOL + 
			'<li>' + line.substr(1) + '</li>' + os.EOL
	} else if (codeStatus == constant.mdStatus['ul']) {
		return '<li>' + line.substr(1) + '</li>' + os.EOL;
	}
}

function code(line) {
	line = line.replace(space, '');
	if(codeStatus == constant.mdStatus['default']) {
		codeStatus = constant.mdStatus['code'];
		var language = line.substr(3);
		if(constant.language.indexOf(language) >= 0) {
			return '<pre class="line-numbser language-' + language + '">' + os.EOL + '<code>' + os.EOL;
		} else {
			return '<pre class="line-number result-code">' + os.EOL;
		}
	} else if(codeStatus == constant.mdStatus['code']) {
		return '</code>' + os.EOL + '</pre>' + os.EOL;
	}
}

function defaultLine(line) {
	return '<p>' + line + '</p>' + os.EOL;
}

function emptyLine(line) {
	codeStatus = constant.mdStatus['default'];
	return '<br>' + os.EOL;
}

function parse(line) {
	var regs = constant.regular;
	if(line.replace(space, '') == '') {
		return emptyLine(line);
	}
	if(codeStatus == constant.mdStatus['default']) {
		for(var r in regs) {
			if(regs[r].test(line)) {
				return eval(r + '("' + line + '")');
			}
		}
	} else {
		return line + os.EOL;
	}
}

module.exports = parse;
