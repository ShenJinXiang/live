// in 运算符
var o = {x: 1};
console.log('"x" in o : ', ('x' in o));
console.log('"y" in o : ', ('y' in o));
console.log('"toString" in o : ', ('toString' in o));

console.log("-----------------------");

// hasOwnProperty()
console.log(o.hasOwnProperty('x'));
console.log(o.hasOwnProperty('y'));
console.log(o.hasOwnProperty('toString'));

console.log("-----------------------");

// propertyIsEnumerable()
o = Object.create({y: 2});
o.x = 1;
console.log(o.propertyIsEnumerable('x'));
console.log(o.propertyIsEnumerable('y'));
console.log(Object.prototype.propertyIsEnumerable('toString'));
