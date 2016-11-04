// requestHandlers.js

function start () {
	console.log('request handler "start" was called.');

	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);
	return 'Hello Start';
}

function upload () {
	console.log('request handler "upload" was called.');
	return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
