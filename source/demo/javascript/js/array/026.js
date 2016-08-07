var s = 'JavaScript';

var result1 = Array.prototype.join.call(s, ' ');
console.log(result1);

var result2 = Array.prototype.filter.call(s, function(x) {
	return x.match(/[^aeiou]/);
}).join('')

console.log(result2);
