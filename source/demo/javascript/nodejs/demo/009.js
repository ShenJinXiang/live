// 009.js

var fs = require('fs');
var url = require('url');

var path = '/Users/shenjinxiang/Documents/live';

var count = 0;
console.time('总计时间:');
logLs(path);
console.timeEnd('总计时间:');
console.log('count:', count);

function logLs(path) {
	var ls = fs.readdirSync(path);
	ls.forEach(function (item, index) {
		var itemPath = path + '/' + item;
		var stat = fs.statSync(itemPath);
		if(stat.isFile()) {
			count++;
			console.log(fs.realpathSync(itemPath));
		}  else {
			logLs(itemPath);
		} 
	});
}
