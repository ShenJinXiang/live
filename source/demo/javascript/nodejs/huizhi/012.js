// 012.js querystring stringify parse

var querystring = require('querystring');

var obj = {
	x: 1,
	y: 2,
	z: ['aa', 'bb']
};

var result = querystring.stringify(obj);
console.log(result);
console.log(querystring.parse(result));
