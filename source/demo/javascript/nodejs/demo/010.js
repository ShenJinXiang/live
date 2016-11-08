var fs = require('fs');
var path = require('path');

console.time('耗时：');
var rootPath = "D:/demo/live";
var filePath = './010.log';
//var ls = [];
function loop (p) {
	var list = fs.readdirSync(p);
	for (var i = 0; i < list.length; i++) {
		var c = list[i];
		var cp = path.join(p, c);
		var stat = fs.statSync(cp);
		if (stat.isFile()) {
			console.log(fs.realpathSync(cp));
			//ls.push(fs.realpathSync(cp));
			fs.appendFileSync(filePath, fs.realpathSync(cp) + '\r\n');
		} else {
			loop(cp);
		}
	}
}

loop(rootPath);
console.timeEnd('耗时：');
