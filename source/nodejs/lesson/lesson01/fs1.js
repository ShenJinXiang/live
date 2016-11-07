var fs = require('fs');
var stat = fs.statSync('./01.txt');
var totalSize = stat.size / (Math.pow(1024, 3));

console.log(stat);
console.log('---------------------------------');
console.log(totalSize);
