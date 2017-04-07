const du = require('./dateUtil');
const fsUtil = require('./fsUtil');
const path = require('path');
/*
console.log(du.getFirstDateStr());
console.log(du.getFirstDateStr('yyyy-MM-dd HH:mm:ss SSS'));
console.log(du.getLastDateStr());
console.log(du.getLastDateStr('yyyy-MM-dd HH:mm:ss SSS'));
let str = '今天是：' + du.getDateStr(new Date()) + '这个月第一秒是：' + du.getFirstDateStr() + '这个月最后一秒是：' + du.getLastDateStr()

fsUtil.writeFile(path.join(__dirname, '/aaa/bbb/ccc/ddd'), str);
const config = require('../config');
console.log(config);
var a = 2;
function fun() {
	console.log(this.a);
}
var o = {
	a: 3,
	fun: fun
};
var p = {
	a: 4
};

o.fun();
(p.fun = o.fun)();
p.fun();
function fn1() {
	fn2();
}

function fn2() {
	console.log(this);
}
fn1();
fn2();
*/

//let str = "/pages/_category/#year#/#month#/#day#/#title#/index.html";
let str = "/pages/_category/${year}/${month}/${day}/${title}/index.html";
let reg = /\#[\w]+\#/g
let obj = {
	year: '2017',
	month: '04',
	day: '12',
	title: '一个好人'
};

let p= path.join(process.cwd(), `${str}`);
console.log(p);
