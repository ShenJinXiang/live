var constant = require('./constant');

function parse(data, callback) {
	var outData = [];
	for(var i = 0; i < data.length; i++) {
		outData.push(data[i]);
	}
	callback(outData);
}

module.exports = parse;
