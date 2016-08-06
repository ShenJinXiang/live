var arr = [1111, 222, 33, 4];
arr.sort();
console.log(arr);
arr.sort(function(x, y) {
	return x - y;
});
console.log(arr);
arr.sort(function(x, y) {
	return y - x;
});
console.log(arr);
