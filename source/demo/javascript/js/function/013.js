var _val = 'hehehe';

var valObj = (function(){
	var _val = 'heihei';
	return {
		setVal: function(val) {
			_val = val;
		},
		getVal: function() {
			return _val;
		}
	};
})();

console.log(valObj.getVal());
valObj.setVal('hello world');
console.log(valObj.getVal());
_val = 'haha';
console.log(valObj.getVal());
