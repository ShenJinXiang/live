function Events() {
}

Events.prototype._obj = {};
Events.prototype.on = function(str, fn) {
	if(this._obj[str]) {
		this._obj[str].push(fn);
	} else {
		this._obj[str] = [];
		this._obj[str].push(fn);
	}
}

Events.prototype.set = function(str) {
	var arr = this._obj[str];
	var args = [];
	console.log(arguments);
	for(var index = 1; index < arguments.length; index++) {
		args.push(arguments[index]);
	}
	console.log(args);
	for(var i = 0; i < arr.length; i++) {
		arr[i]();
	}
}

module.exports = Events;
