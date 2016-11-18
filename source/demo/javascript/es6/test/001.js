var a = [];

for (var i = 0; i < 10; i++) {
	a[i] = (function (x) {
		return function() {
			console.log(x);
		};
	})(i);
}

for (var j = 0; j < 10; j++) {
	a[j]();
}

console.log('---------------');

var b = [];
for (let x = 0; x < 10; x++) {
	b[x] = function () {
		console.log(x);
	};
}

b[6]();

console.log('---------------');

var c = [];
for (var y = 0; y < 10; y++) {
	c[y] = function () {
		console.log(y);
	};
}
c[6]();
