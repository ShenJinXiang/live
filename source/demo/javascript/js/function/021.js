function f(y) {
	return this.x + y;
}
var o = {x: 1};
var g = f.bind(o);

console.log(g(2));

