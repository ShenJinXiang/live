var _code = 0;
function Line() {}

Line.prototype.setName = function(name, code){
	this.name = name;
	_code = code;
}

Line.prototype.getName = function() {
	return this.name;
}

Line.getCode = function() {
	return _code;
}

module.exports = Line;

