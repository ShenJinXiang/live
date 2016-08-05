var o = {
	_x : 10,
	get sx() {
		return this._x;
	},
	set sx(x) {
		this._x = x;
	}
};

console.log(o.sx());
o.sx(11);
console.log(o.sx());

