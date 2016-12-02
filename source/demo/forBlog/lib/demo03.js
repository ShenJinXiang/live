// demo03.js
const querystring = require('querystring');
let mdFile = '/source/post/helloworld.md';
let path = require('path');
let rl = require('./readlines');
rl(path.join(process.cwd(), mdFile), function (data) {
	console.log(data);
	console.log(data.indexOf('---', 1));
	let arr = data.slice(data.indexOf('---') + 1, data.indexOf('---', data.indexOf('---') + 1));
	let titleStr = arr.join(',');
	let obj = querystring.parse(titleStr, ',', ': ');
	console.log('title:', obj.title);
	console.log('date:', obj.date);
	console.log('tags:', obj.tags);
	console.log('category:', obj.category);
});
