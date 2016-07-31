var qs = require('querystring');

var str = 'x: 1, y: 2, z: 3';
var o = qs.parse(str, ', ', ': ');
console.log(str);
console.log(o);
