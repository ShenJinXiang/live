var o = {x: 1};
var desc = Object.getOwnPropertyDescriptor(o, 'x');
console.log(desc);
var desc1 = Object.getOwnPropertyDescriptor(o, 'y');
var desc2 = Object.getOwnPropertyDescriptor(o, 'toString');
console.log(desc1);
console.log(desc2);

