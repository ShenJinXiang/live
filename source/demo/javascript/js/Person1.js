function Person1() {
	this.code = 0;
}

Person1.prototype.setCode = function(code) {
	this.code = code;
}

Person1.prototype.getCode = function () {
	return this.code;
}
module.exports = Person1;
