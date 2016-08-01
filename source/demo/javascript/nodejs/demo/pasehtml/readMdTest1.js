var readMd = require('./readMd');
var fs = require('fs');
var fWrite = fs.createWriteStream('./test1.md');

var filename = "./test.md";
readMd(filename, function(data) {
	console.log(data);
	fWrite.write(data.join("\n"));
});

