var o = {x: 1, y : 2};
var o1 = Object.create(o);
o1.x1 = 11;
o1.y1 = 22;
console.log(Object.isExtensible(o1));

Object.preventExtensions(o1);
console.log(Object.isExtensible(o1));
console.log(o);
console.log(o1);

o.z = 3;
for(var prop in o1) {
	console.log(prop, ':', o1[prop]);
}
