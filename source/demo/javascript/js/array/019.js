var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
try {
	arr.forEach(function(val, index) {
		if(index == 5) {
			throw Error('hehe');
		}
		console.log(index, val);
	});
} catch (e) {
	console.log(e);
}
