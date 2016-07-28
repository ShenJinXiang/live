var reg = require('./regular');
console.log(reg);

var str1 = '   ```java   ';
console.log('-----' + str1 + '-----');
console.log(reg.code.test(str1));
console.log('-->' + str1.substr(str1.indexOf('```') + 3).replace(reg.space, '') + '<-');
