// event.js

var events = require('events');
var ee = new events.EventEmitter();

ee.on('click', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});

ee.on('click', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
});

ee.once('click', function(arg1, arg2) {
	console.log('once listener1', arg1, arg2);
});

var count = 0;
setInterval(function() {
	count++;
	console.log('count:', count);
	ee.emit('click', 'shenjinxiang', 1986);
	if(count >= 10) {
		ee.removeAllListeners('click');
	}
}, 1000);
