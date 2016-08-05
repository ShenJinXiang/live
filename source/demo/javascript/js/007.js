var o = {};
Object.defineProperty(o, 'x', {
	value: 1,
	writable: true,
	enumerable: false,
	configurable: true
});

console.log(o);
console.log(o.x);
console.log('x' in o);

console.log('toString' in {});

