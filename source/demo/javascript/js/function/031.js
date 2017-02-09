/*
function a(fn, name) {
	let t1 = new Date().getTime();
	while(true) {
		if (new Date().getTime() - t1 > 3000) {
			break;
		}
	}
	fn(name);
}

a(function(name) {
	console.log('--------------')
	console.log(name);
	console.log('--------------')
}, '张三');
console.log(11);
*/

var abc = function (cb) {
	return function () {
		var t = new Date().getTime();
		while (true) {
			if (new Date().getTime() - t > 3000) {
				break;
			}
		}
		cb();
	}
};

console.log('11111');
abc(function() {
	console.log('2222');
})();
console.log('333');

