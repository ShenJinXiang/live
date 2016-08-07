arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result1 = arr.every(function(x) {
	return x < 10;
});

console.log(arr);
console.log(result1)
var result2 = arr.every(function(x){
	return x % 3 == 0;
});

var arr1 = [];
console.log(arr1.every(function(){return false;}));
console.log(arr1.some(function(){return true;}));
