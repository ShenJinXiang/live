// range2.js

function Range(from, to) {
	this.from = from;
	this.to = to;
}

Range.prototype = {
	includes: function(x) {
		return this.from <= x && x <= this.to;
	},
	foreach: function(f) {
		for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
	},
	toString: function() {
		return '(' + this.from + '...'+ this.to + ')';
	}
};

var r = new Range(1, 5);
console.log(r.includes(3));
console.log(r.includes(7));
r.foreach(console.log);
console.log(r);
console.log(r.toString());
