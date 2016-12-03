const querystring = require('querystring');
const util = require('util');

let o = {
	'1': {
		'id': '1',
		'name': '刘备',
		'age': 46,
		'address': '四川',
	},
	'2': {
		'id': '2',
		'name': '张飞',
		'age': '33',
		'address': '北京'
	}
};

/*
let str1 = querystring.stringify(o, ',', ':');
let str2 = util.inspect(o, false, 9);
console.log(str1);
console.log(str2);
*/
let str = JSON.stringify(o);
let o1 = JSON.parse(str);

console.log('-------str--------');
console.log(str)
console.log('-------o1--------');
console.log(o1)
