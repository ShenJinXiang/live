// 011.js url.parse
var url = require('url');

var url1 = 'http://www.shenjinxiang.com';
var url2 = 'http://www.shenjinxiang.com?username=sjx&age=24';

console.log(url.parse(url1, true));
console.log(url.parse(url2, true));
