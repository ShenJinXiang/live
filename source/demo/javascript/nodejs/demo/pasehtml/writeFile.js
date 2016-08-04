var fs = require('fs');
var os = require('os');
var parse = require('./parse');

function write(data, outFile) {
	var fWrite = fs.createWriteStream(outFile);
	parse(data, function(outData){
		fWrite.write(outData.join(os.EOL));
		console.log(outFile, " 写入数据完成！");
	});
}

module.exports = write;
