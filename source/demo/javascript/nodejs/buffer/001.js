// 001.js
let buf1 = new Buffer(10);
let buf2 = new Buffer([10, 20, 30, 40, 50]);
let buf3 = new Buffer('www.shenjinxiang.com', 'utf-8');
console.log(buf1);
console.log(buf2);
console.log(buf3);

console.log(buf3.toString('utf-8'));
