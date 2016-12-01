// demo03.js
let mdFile = '/source/post/helloworld.md';
let path = require('path');
let rl = require('./readlines');
rl(path.join(process.cwd(), mdFile), function (data) {
	console.log(data);
});
