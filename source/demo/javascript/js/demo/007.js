var a = [1, 2];
/*
var b = a.map(function (item) {
	return item;
});

var b = a.map( (item) => item);

var b = [1, 2].map( (item) => item);

var b = [[1, 2], [3, 4]].map( (item) => item);
*/
var b = [[1, 2], [3, 4]].map( ([a, b]) => a + b);

console.log(b);
