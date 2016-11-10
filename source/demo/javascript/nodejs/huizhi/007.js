// 007.js exists 判断文件是否存在，文件为命令参数
var fs = require('fs');

var filename = process.argv[2];
fs.exists(filename, function (exists) {
	console.log(filename, (exists ? '存在' : '不存在'))
});
