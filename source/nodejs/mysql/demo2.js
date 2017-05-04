function Obj() {
	this.pool = 10;
}

Obj.staticPool = 100;
Obj.prototype.setName = function(name) {
	this.name = name;
};

Obj.prototype.getName = function() {
	return this.name;
};

let o1 = new Obj();
o1.setName('张三');
let o2 = new Obj();
o2.setName('李四');
console.log(o1);
console.log(o2);

console.log('--------');
o1.setName('王五');
console.log(o1);
console.log(o2);

console.log('--------');
o1.pool = 11;
console.log(o1);
console.log(o2);

console.log('--------');
o1.staticPool = 101;
console.log(o1);
console.log(o2);
