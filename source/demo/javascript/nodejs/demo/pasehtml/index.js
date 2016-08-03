var path = require('path');
var fs = require('fs');

var pwd = process.cwd();


// 获取参数
var args = process.argv;
if(args.length < 3) {
	console.log('参数错误，未收到md文件～～');
	return;
}
var mdFile = path.join(pwd, args[2]);

if(!fs.existsSync(mdFile)) {
	console.log("md文件不存在，请重新确认！");
	return;
}

var stats = fs.statSync(mdFile);
if(!stats.isFile()) {
	console.log("传入的不是文件，请重新确认！");
	return;
}

var mdBaseName = path.basename(mdFile);
var mdExtName = path.extname(mdFile);
var mdDirname = path.dirname(mdFile);
console.log('basename : ', mdBaseName);
console.log('mdExtName: ', mdExtName);
console.log('mdDirname : ', mdDirname);
var outFile = path.join(mdDirname, mdBaseName.substring(0, mdBaseName.indexOf(mdExtName)) + '.html');
console.log(outFile);
