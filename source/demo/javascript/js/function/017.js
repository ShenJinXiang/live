var c = (function(){
	var n = 1;
	return {
		set count(m) {
			if(m > n) {
				n = m;
			}
		},
		get count() {
			return n++;
		}
	};
}());

console.log(c.count);
console.log(c.count);
console.log(c.count);
console.log(c.count);
c.count = 10;
console.log(c.count);
console.log(c.count);
console.log(c.count);
console.log(c.count);
