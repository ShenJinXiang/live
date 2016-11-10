// 003.js
// 进程事件 exit
process.on('exit', function (code) {
	console.log('exit, code:', code);
});

var t = Date.now();
console.log(t);
