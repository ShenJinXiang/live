var os = require('os');
var constant = require('./constant');

module.exports = {
	var _codeStatus = constant.mdStatus['default'];
	var space = /^[\s]+|[\s]+$/g 
	'h6' : function(line) {
		line = line.replace(space, '');
		return '<h6>' + line.substr(1) + '</h6>' + os.EOL;
	},
	'h5' : function(line) {
		line = line.replace(space, '');
		return '<h5>' + line.substr(1) + '</h5>' + os.EOL;
	},
	'h4' : function(line) {
		line = line.replace(space, '');
		return '<h4>' + line.substr(1) + '</h4>' + os.EOL;
	},
	'h3' : function(line) {
		line = line.replace(space, '');
		return '<h3>' + line.substr(1) + '</h3>' + os.EOL;
	},
	'h2' : function(line) {
		line = line.replace(space, '');
		return '<h2>' + line.substr(1) + '</h2>' + os.EOL;
	},
	'h1' : function(line) {
		line = line.replace(space, '');
		return '<h1>' + line.substr(1) + '</h1>' + os.EOL;
	},
	'hr' : function(line) {
		return '<hr/>' + os.EOL;
	},
	'b' : function(line) {
		line = line.replace(space, '');
		return '<b>' + line + '</b>' + os.EOL;
	},
	'ul' : function(line, codeStatus) {
		if(codeStatus == constant.mdStatus['default']) {
			
			return '<ul>' + os.EOL +
				'<li></li>' + os.EOL;
		}
	}
}
