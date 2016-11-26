// demo.js
let uuid = require('node-uuid');
for (let i = 0; i < 10; i++) {
	console.log(uuid.v1());
}
console.log('---------------');
for (let i = 0; i < 10; i++) {
	console.log(uuid.v4());
}
