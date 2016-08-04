var path = require('path');
var getHtmlFile = require('./filename');
var readLines = require('./readLines');
var write = require('./writeFile');

// 获取参数
var args = process.argv;
if(args.length < 3) {
	console.log('参数错误，未收到md文件～～');
	return;
}

var outFile = getHtmlFile(args[2]);
var mdFile = path.join(process.cwd(), args[2]);
console.log(mdFile);
console.log(outFile);

readLines(mdFile, function(data){
	write(data, outFile);
});
