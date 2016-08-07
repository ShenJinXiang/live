var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = arr.filter(function(val){
	return val % 2 == 0;
});

console.log(arr);
console.log(arr2);
