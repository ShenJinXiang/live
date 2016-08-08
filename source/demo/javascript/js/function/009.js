function factorial(n) {
	if(isFinite(n) && n > 0 && n == Math.round(n)) {
		if (!(n in factorial)) {
			factorial[n] = n * factorial(n - 1);
		}
		return factorial[n];
	}
	else return NaN;
}

factorial[1] = 1;

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
