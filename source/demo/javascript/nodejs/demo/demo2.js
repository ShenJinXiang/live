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

btn.emit('click');
