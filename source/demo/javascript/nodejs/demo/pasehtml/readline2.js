var fs = require('fs');
var readline = require('readline');

function readMd(file, callback) {
	var data = [];

	var rl = readline.createInterface({
		input : fs.createReadStream(file);
	});

	rl.on('line', function(line){
		data.push(line);
	});

	rl.on('close', function() {
		callback(data);
	});
}

module.exports = readMd;
