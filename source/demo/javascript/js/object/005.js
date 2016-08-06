var obj = {
	val: 100,
	get prop() {
		return this.val;
	},
	set prop(x) {
		this.val = x;
	}
};
console.log(obj.prop);
obj.prop = 11;
console.log(obj.prop);
