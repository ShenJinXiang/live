var querystring = require('querystring');

var o = {
	x: 1,
	y: 2
};
var result = querystring.stringify(o);
var result1 = querystring.stringify(o, ',', ': ');
console.log(o);
console.log(result);
console.log(result1);
