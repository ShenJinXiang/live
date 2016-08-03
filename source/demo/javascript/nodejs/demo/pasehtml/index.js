var path = require('path');
var getHtmlFile = require('./filename');

// 获取参数
var args = process.argv;
if(args.length < 3) {
	console.log('参数错误，未收到md文件～～');
	return;
}

var outFile = getHtmlFile(args[2]);
console.log(outFile);
