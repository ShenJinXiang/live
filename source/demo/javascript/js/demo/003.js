function Test() {
	this.name = 'a';
}

Test.prototype.setName = function (name) {
	this.name = name;
};

Test.prototype.getName = function () {
	return this.name;
};

let t1 = new Test();
let t2 = new Test();
console.log(t1);
console.log(t2);
console.log(t1.getName());
console.log(t2.getName());

t1.setName('bb');
t2.setName('cc');
console.log(t1.name);
console.log(t2.name);
console.log(t1.getName());
console.log(t2.getName());
