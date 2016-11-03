# Node.js开发指南
## Node.js快速入门
### 开始使用Node.js编程

*helloworld.js:*

```javascript
// helloworld.js
console.log('hello world!');
```

*consolelog.js:*

```javascript
// consolelog.js
console.log('%s: %d', 'Hello', 25);
```

*app.js:*
```javascript
var http = requrire('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Shen JinXiang!</h1>');
	res.write('<a href="http://www.shenjinxiang.com">LikeStar</a>');
	res.end('<p>Node.js</p>');
}).listen(3000);
console.log('HTTP server is listening at port 3000.');
```

### 异步式I/O与事件式编程

*readfile.js:*
```javascript
var fs = require('fs');
fs.readFile('./consolelog.js', 'utf-8', function(err, data) {
	if(err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
console.log('end.');
```

*readfilesync.js:*
```javascript
var fs = require('fs');

var data = fs.readFileSync('./readfile.js', 'utf-8');
console.log(data);
console.log('end.');
```

*readfilecallback.js:*
```javascript
function readFileCallBack(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
}

var fs = require('fs');

fs.readFile('./readfile.js', 'utf-8', readFileCallBack);
console.log('end.');
```

*event.js:*
```javascript
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function() {
	console.log('some_event occured.');
});

setTimeout(function() {
	event.emit('some_event');
}, 3000);
console.log("hehe");
```

### 模块和包

*创建模块:*
```javascript
// module.js

var name;

exports.setName = function(thyName) {
	name = thyName;
};

exports.sayHello = function() {
	console.log('Hello ' + name);
};
// module.js end~~~


// getmodule.js

var myModule = require('./module');

myModule.setName('Shen JinXiang');
myModule.sayHello();
// getmodule.js end~~~
```

*loadmodule.js:*
```javascript
var hello1 = require('./module');
hello1.setName('ShenJinXiang');

var hello2 = require('./module');
hello1.setName('ShenJinXiang!');

hello1.sayHello();
```

*覆盖exports:*
```javascript
// hello.js

function Hello() {
	var name;

	this.setName = function(thyName) {
		name = thyName;
	};

	this.sayHello = function() {
		console.log('Hello ' + name);
	};
}

module.exports = Hello;
// hello.js end~~~

// gethello.js

var Hello = require('./hello');

hello = new Hello();
hello.setName('ShenJinXiang');
hello.sayHello();
// gethello.js end~~~
```
