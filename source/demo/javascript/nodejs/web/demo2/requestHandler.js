var exec = require("child_process").exec;
var fs = require('fs');

function start(response) {
	console.log('Request handler "start" was called. ');

	exec('ls -lah', function(error, stdout, stderr) {
		response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	console.log('Request handler "upload" was called.');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello Upload');
	response.end();
}

function html1(response) {
	console.log("request for 001.html");
	fs.readFile('001.html', 'utf8', function(err, data){
		if(err) throw err;
		console.log("reading 001.html");
		response.write(data);
	});
}

exports.start = start;
exports.upload = upload;
exports.html1 = html1;
