var o = {};
var p = Object.defineProperties(o, {
	x: {value: 1, writable: true, enumerable: true, configurable: true},
	y: {value: 2, writable: true, enumerable: true, configurable: true},
	r: {
		get: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},
		enumerable: true,
		configurable: true
	}
});

console.log(o);
console.log(p);
console.log(o === p);
