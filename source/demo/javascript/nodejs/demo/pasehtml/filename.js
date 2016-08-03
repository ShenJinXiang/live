var path = require('path');
var fs = require('fs');

function getHtmlFilePath(mdFile) {
	var pwd = process.cwd();
	if(!mdFile){
		throw new error('未收到md文件');
	}

	mdFile = path.join(pwd, mdFile);
	if(!fs.existsSync(mdFile)) {
		throw new erroe('md文件不存在，请重新确认~');
	}
	var stats = fs.statSync(mdFile);
	if(!stats.isFile) {
		throw new error('传入的不是文件，请重新确认~');
	}

	var mdBaseName = path.basename(mdFile);
	var mdExtName = path.extname(mdFile);
	var mdDirname = path.dirname(mdFile);
	var outFile = path.join(mdDirname, mdBaseName.substring(0, mdBaseName.indexOf(mdExtName)) + '.html');

	return outFile;
}

module.exports = getHtmlFilePath;
