function enumeration(namesToValues) {
	var enumeration = function() {
		throw "Can't Instantiate Enumerations";
	};

	var proto = enumeration.prototype = {
		constructor: enumeration,
		toString: function() {
			return this.name;
		},
		valueOf: function() {
			return this.value;
		},
		toJSON: function() {
			return this.name;
		}
	};

	enumeration.values = [];

	for(name in namesToValues) {
		var e = Object.create(proto);
		e.name = name;
		e.value = namesToValues[name];
		enumeration[name] = e;
		enumeration.values.push(e);
	}

	enumeration.foreach = function(f, c) {
		for(var i = 0; i < this.values.length; i++) {
			f.call(c, this.values[i]);
		}
	};

	return enumeration;
}

t1 = enumeration({name: 'zs', age: 11, address: 'bj'});
console.log(t1);
console.log("-----------------------------------------")
console.log(t1.toString());
console.log("-----------------------------------------")
console.log(t1.toJSON());
console.log("-----------------------------------------")
console.log(t1.valueOf());
console.log("-----------------------------------------")

enumeration.foreach(function(data, val){
	console.log(data, '------->', val);
}, t1);
