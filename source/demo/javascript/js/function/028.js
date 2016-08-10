var map = Array.prototype.map
	? function(a, f) {return a.map(f);}
	: function(a, f) {
		var results = [];
		for(var i = 0, len = a.length; i < len; i++) {
			if(i in a) results[i] = f.call(null, a[i], i, a);
		}
		return results;
	};
