const net = require('net');

let server = net.createServer(function (socket) {
	
	socket.on('data', function (data) {
		console.log('---------------get data----------------');
		console.log(data);
		socket.write(data);
		socket.write('----------\n');
	});

	socket.on('end', function () {
		console.log('连接断开！');
	});

	socket.write('hello world!');
});

server.listen(8989, function () {
	console.log('Server bound.');
});
