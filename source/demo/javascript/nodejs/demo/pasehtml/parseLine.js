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
