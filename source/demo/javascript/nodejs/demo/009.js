// 009.js

var fs = require('fs');
var url = require('url');

var path = '/Users/shenjinxiang/Documents/live';

console.time('总计时间:');
logLs(path);
console.timeEnd('总计时间:');

function logLs(path) {
	var ls = fs.readdirSync(path);
	ls.forEach(function (item, index) {
		var itemPath = path + '/' + item;
		var stat = fs.statSync(itemPath);
		if(stat.isFile()) {
			console.log(fs.realpathSync(itemPath));
		}  else {
			logLs(itemPath);
		} 
	});
}
