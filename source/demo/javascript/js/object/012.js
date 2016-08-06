var code = {
	x: 0,
	y: 1,
	z: 2
};

console.log(Object.isFrozen(code));

Object.freeze(code);

console.log(Object.isFrozen(code));

code.m = 1;
code.x = 10;
console.log(code);
