const fileDao = require('../dao/fileDao');
const uuid = require('node-uuid');

let data = fileDao.read('../db/person.json');
console.log(data);
console.log("-------------------------");

let obj1 = {
	'name': '张三',
	'age': 19,
	'address': '北京',
	'id': '1'
};
let obj2 = {
	'name': '张三',
	'age': 19,
	'address': '北京',
	'id': '2'
};
let obj3 = {
	'name': '张三',
	'age': 19,
	'address': '北京',
	'id': '3'
};
let obj4 = {
	'name': '张三',
	'age': 19,
	'address': '北京',
	'id': '4'
};

fileDao.add('../db/person.json', obj1);
fileDao.add('../db/person.json', obj2);
fileDao.add('../db/person.json', obj3);
fileDao.add('../db/person.json', obj4);


let data1 = fileDao.read('../db/person.json');
console.log(data1);
console.log("+++++++++++++++++++++++++");

fileDao.deleteById('../db/person.json', '1');
let data2 = fileDao.read('../db/person.json');
console.log(data2);
console.log("=========================");

let obj5 = {
	'name': '李四',
	'age': 20,
	'address': '北京',
	'id': '4'
};
fileDao.edit('../db/person.json', obj5);
let data3 = fileDao.read('../db/person.json');
console.log(data3);
