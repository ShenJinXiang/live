var extend = (function(){
	for(var p in {toString: null}) {
		return function extend(o) {
			for(var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for(var prop in source) {
					o[prop] = source[prop];
				}
			}
			return o;
		}
	}
}());
