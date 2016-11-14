var events = require('events');
var e = new events.EventEmitter();
e.setMaxListeners(20);

e.on('click', function () {
	console.log('click1');
});
e.on('click', function () {
	console.log('click2');
});
e.on('click', function () {
	console.log('click3');
});
e.on('click', function () {
	console.log('click4');
});
e.on('click', function () {
	console.log('click5');
});
e.on('click', function () {
	console.log('click6');
});
e.on('click', function () {
	console.log('click7');
});
e.on('click', function () {
	console.log('click8');
});
e.on('click', function () {
	console.log('click9');
});
e.on('click', function () {
	console.log('click10');
});
e.on('click', function () {
	console.log('click11');
});
e.emit('click');
