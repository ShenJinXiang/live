function eo () {}

eo.prototype.on = function(cb) {
	if (!this.events) {
		this.events = [];
	}
	this.events.push(cb);
};

eo.prototype.cf = function () {
	var args = [];
	for (var i = 1; i < arguments.length; i++) {
		args.push(arguments[i]);
	}
	var t1 = new Date().getTime();
	while(true) {
		if (new Date().getTime() - t1 > 3000) {
			break;
		}
	}
	if (this.events) {
		this.events.forEach(function (item) {
			item.apply(null)
		});
	}
};

var ee = new eo();

console.log('111');
ee.on(function () {
	console.log('aaaa');
});
ee.on(function () {
	console.log('bbbb');
});
console.log('222');
ee.cf();
