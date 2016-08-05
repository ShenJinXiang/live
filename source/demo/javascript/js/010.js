function classof(o) {
	if (o === null) return 'Null';
	if (o === undefined) return 'Undefined';
	return Object.prototype.toString.call(o).slice(8, -1);
}

console.log('classof(undefined) : ', classof(undefined));
console.log('classof(null) : ', classof(null));
console.log('classof(1) : ', classof(1));
console.log('classof("") : ', classof(""));
console.log('classof(false) : ', classof(false));
console.log('classof({}) : ', classof({}));
console.log('classof([]) : ', classof([]));
console.log('classof(/./) : ', classof(/./));
console.log('classof(new Date()) : ', classof(new Date()));
function f() {};
console.log('classof(new f()) : ', classof(new f()));
