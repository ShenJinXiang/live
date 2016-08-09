var arr = [2, 1, 1, 1, 1, 1, 2, 14, 4, 7, 2, 2, 2, 15, 6, 2]
var result = arr.reduce(function(x, y){
	return x + y;
});
console.log(result);
