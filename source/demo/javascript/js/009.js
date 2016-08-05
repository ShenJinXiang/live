var p = {x: 1};
var o = Object.create(p);
console.log(Object.getPrototypeOf(o) == p);
console.log(p.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(o));
