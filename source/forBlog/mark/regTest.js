const regs = require('./regexps');

let str = ' ``` javascript ';
console.log(regs.H1.test(str));
console.log(regs.H2.test(str));
console.log(regs.H3.test(str));
console.log(regs.H4.test(str));
console.log(regs.H5.test(str));
console.log(regs.H6.test(str));
console.log(regs.HR.test(str));
console.log(regs.CODE.test(str));
