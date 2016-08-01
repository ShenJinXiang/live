var qs = require('querystring');
var o = {
	'x' : 1,
	'y' : 2,
	'z' : 3
};
var ostr = qs.stringify(o);

console.log(o);
console.log(ostr);

var ostr1 = qs.stringify(o, ', ', ' : ');
console.log(ostr1);
