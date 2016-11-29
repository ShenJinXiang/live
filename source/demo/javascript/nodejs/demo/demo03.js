var ev = require('./eventUtil');
var o = new ev();

o.on('click', function(arg1, arg2) {
    console.log('listener 1', arg1, arg2);
});
o.on('click', function(arg1, arg2) {
    console.log('listener 2', arg1, arg2);
});
o.once('click', function(arg1, arg2) {
    console.log('listener 3 once', arg1, arg2);
});
o.on('click', cb1);

function cb1 (arg1, arg2) {
    console.log('listener cb1', arg1, arg2);
}

o.emit('click', '123', 'hehe');
console.log('------------------------------------');
o.emit('click', '123', 'hehe');
console.log('------------------------------------');
o.emit('click', '123', 'hehe');
o.removeListener('click', cb1);
console.log('---------removeListener---------------------------');
o.emit('click', '123', 'hehe');
o.removeAllListeners();
console.log('----------removeAllListeners--------------------------');
o.emit('click');

o.on('click', function () {
    console.log('click 1');
});
o.emit('click');
