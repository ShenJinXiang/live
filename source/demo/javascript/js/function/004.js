var o = {
	m: function(x, y) {
		return x + y;
	}
}

console.log(o.m(1, 2));
console.log(o.m.call({}, 3, 4));
