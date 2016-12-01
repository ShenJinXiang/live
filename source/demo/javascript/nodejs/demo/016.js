// 016.js
let util = require('util');
let fs = require('fs');
let path = require('path');

let str = 'public/temp1/temp2';
util.log('str', str);
let arr = str.split('/');
util.log('arr', arr);

let temppath = process.cwd();
for (let i = 0; i < arr.length; i++) {
	temppath = path.join(temppath, arr[i]);
	let ie = fs.existsSync(temppath);
	if (!ie) {
		fs.mkdirSync(temppath);
	} 
}

