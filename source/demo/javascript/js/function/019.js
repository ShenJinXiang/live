function check(args) {
	var actual = args.length;
	var expected = args.callee.length;
	if(actual != expected) {
		console.log('expected ', expected, ' args ', actual);
	}
}

function f(x, y, z) {
	check(arguments);
	return x + y + z;
}

console.log(f(1, 2));
console.log(f(1, 2, 3));
console.log(f(1, 2, 3, 4));
