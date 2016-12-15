// md5Test.js
const crypto = require('crypto');

let content = 'password';

let md5 = crypto.createHash('md5');
md5.update(content);
let result = md5.digest('hex');

console.log('content:', content);
console.log('result:', result);
