var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function(val, index, a){
	if(index === 0) {
		console.log('a === arr : ' + (a === arr));
	}
	console.log('index : ' + index + '  value : ' + val );
});
