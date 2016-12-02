const url = require('url');
let url1 = 'http://www.shenjinxiang.com?username=admin&password=123456';
let urlObj = url.parse(url1, true);
console.log(urlObj);
