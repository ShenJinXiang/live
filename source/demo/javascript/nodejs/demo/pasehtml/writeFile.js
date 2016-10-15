var fs = require('fs');
var os = require('os');

function write(data, outFile) {
	var fWrite = fs.createWriteStream(outFile);
	fWrite.write(data.join("\n"));
	console.log(outFile, " 写入数据完成！");
}

module.exports = write;
