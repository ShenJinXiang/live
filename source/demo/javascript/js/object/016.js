var o = {
	x : 1,
	y : 2
};

console.log(o);

Object.freeze(o);
o.z = 3;
console.log(o);
o.x = 1;
console.log(o);
