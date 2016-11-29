let arr = ['a', 'b', 'c', 'd', 'e'];

let arr1 = arr.filter(function(val, index) {
	console.log(index, val);
	return val !== 'b';
});

console.log(arr1);
