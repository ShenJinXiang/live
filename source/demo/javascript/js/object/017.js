function enumerate(namesToValues) {
	var _obj = {};
	for(var p in namesToValues) {
		_obj[p] = namesToValues[p];
	}

	Object.freeze(_obj);
	return _obj;
}

var o1 = enumerate({x: 1, y: 2});
console.log(o1);
o1.z = 10;
console.log(o1);

var o2 = enumerate({x: 3, z: 7});
console.log(o2);
o2.xx = 11;
console.log(o2);
o2.x = 4;
console.log(o2);

