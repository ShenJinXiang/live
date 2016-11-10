// 002.js
process.stdin.on('readable', function () {
	var chunk = process.stdin.read();
	if (chunk) {
		process.stdout.write('data:' + chunk + '\n');
	}
});
