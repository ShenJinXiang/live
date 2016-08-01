var path = require('path');

var p1 = '/as/ad/ae/af//df/df/dd/s//fds\\df';
var p2 = path.normalize(p1);
console.log(p1);
console.log(p2);
