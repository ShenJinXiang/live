let path = require('path');

let pathStr = '/home/user/dir/001.txt';
let pathObj = path.parse(pathStr);
console.log('dir:', pathObj.dir);
console.log('name:', pathObj.name);
console.log('ext:', pathObj.ext);
