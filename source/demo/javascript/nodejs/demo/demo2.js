// demo2.js
let even = require('./eventUtil');
let btn = new even();
console.dir(btn);

btn.on('click', function () {
	console.log('click 01');
});

btn.on('click', function () {
	console.log('click 02');
});

btn.on('click', function () {
	console.log('click 03');
});

btn.on('click', function () {
	console.log('click 04');
});

btn.on('click', function () {
	console.log('click 05');
});

btn.on('click', function () {
	console.log('click 06');
});

btn.on('click', function () {
	console.log('click 07');
});

btn.on('click', function () {
	console.log('click 08');
});

btn.on('click', function () {
	console.log('click 09');
});

btn.on('click', function () {
	console.log('click 10');
});

btn.on('move', function () {
	console.log('move 01');
});

btn.emit('click');
btn.emit('move');
console.log('----');
btn.removeAllListeners('click');
btn.emit('click');
btn.emit('move');
btn.addListener('click', function () {
	console.log('click --- 01');
});
btn.once('move', function () {
	console.log('move once');
});
console.log(btn.listenerCount('move'));
console.log('+++++++');
btn.emit('click');
btn.emit('move');
console.log(btn.listenerCount('move'));
console.log('*******');
btn.emit('click');
btn.emit('move');
console.log(btn.listenerCount('move'));
