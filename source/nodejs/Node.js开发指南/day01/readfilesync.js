// readfilesync.js

var fs = require('fs');

var data = fs.readFileSync('./readfile.js', 'utf-8');
console.log(data);
console.log('end.');
