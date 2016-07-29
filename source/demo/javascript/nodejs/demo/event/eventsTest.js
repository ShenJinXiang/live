var events = require('./events');

var e = new events();
e.on('e1', function(arg1, arg2){
	console.log('e1 111', arg1, arg2);
});

e.on('e1', function(arg1, arg2){
	console.log('e1 222', arg1, arg2);
});

e.set('e1', 'hehehe', 'heiheihei');
