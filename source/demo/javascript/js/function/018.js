function constfunc(v) {
	return function() {
		return v;
	};
}

var funcs = [];
for(var i = 0; i < 10; i++) {
	funcs[i] = constfunc(i);
}

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());
console.log(funcs[5]());
console.log(funcs[6]());
console.log(funcs[7]());
console.log(funcs[8]());
console.log(funcs[9]());
