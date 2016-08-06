var Person1 = require('./Person1');

var p1 = new Person1();
console.log(p1.getCode());
p1.setCode(2);
console.log(p1.getCode());
var p2 = new Person1();
console.log(p2.getCode());
p2.setCode(3);
console.log(p1.getCode());
console.log(p2.getCode());
