// index.js

var fs = require('fs');

var filePath = process.argv[2];
var toFile = process.argv[3];

var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream(toFile);

var stat = fs.statSync(filePath);
var totalSize = stat.size / (Math.pow(1024, 2));
console.time('传输耗时');

readStream.on('data', function (chunk) {
	if (writeStream.write(chunk) === false) {
		readStream.pause();
	}
});

readStream.on('end', function () {
	console.timeEnd('传输耗时');
	console.info('数据传输结束，总共 %s MB', totalSize);
	writeStream.end();
});

writeStream.on('drain', function () {
	readStream.resume();
});
