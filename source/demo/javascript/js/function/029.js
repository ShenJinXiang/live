function not(f) {
	 return function() {
		var result = f.apply(this, arguments);
		return !result;
	 }
}

var even = function (x) {
	return x % 2 === 0;
}

var odd = not(even);
console.log([1, 1, 3, 5, 5].every(odd));
