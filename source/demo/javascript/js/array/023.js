var arr = [1, 2, 3, 4, 5,  6, 7, 8, 9];
var sum = arr.reduce(function(x, y) {
	console.log('x: ', x, ', y: ', y);
	return x + y;
});

console.log(sum);
