/*
const du = require('./dateUtil');
const fsUtil = require('./fsUtil');
const path = require('path');
console.log(du.getFirstDateStr());
console.log(du.getFirstDateStr('yyyy-MM-dd HH:mm:ss SSS'));
console.log(du.getLastDateStr());
console.log(du.getLastDateStr('yyyy-MM-dd HH:mm:ss SSS'));
let str = '今天是：' + du.getDateStr(new Date()) + '这个月第一秒是：' + du.getFirstDateStr() + '这个月最后一秒是：' + du.getLastDateStr()

fsUtil.writeFile(path.join(__dirname, '/aaa/bbb/ccc/ddd'), str);
*/
const config = require('../config');
console.log(config);
