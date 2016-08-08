function counter(n) {
	return {
		get count() {
			return n++;
		},
		set count(m) {
			if(m > n) n = m;
		}
	};
}

var c = counter(100);
console.log(c.count);
console.log(c.count);
console.log(c.count);
c.count = 200;
console.log(c.count);
console.log(c.count);
console.log(c.count);
console.log(c.count);

