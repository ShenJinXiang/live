var factorial = function(x) {
	if(x <= 1) return 1;
	return x * arguments.callee(x - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
