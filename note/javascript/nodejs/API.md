# API

tags: nodejs
---

## fs
### rename
异步版本的rename函数.完成时的回调函数(callback)只接受一个参数:可能出现的异常信息. 
> fs.rename(oldPath, newPath, callback)

```javascript
var fs = require('fs');
fs.rename('aa.txt', 'bb.txt', function(err){
	if(err) {
		throw err;
	}
	console.log('rename successfully');
});
```
### mkdir
异步版的 mkdir(2)。 异步版的 link(2). 完成时的回调函数（callback）只接受一个参数：可能出现的异常信息
> fs.mkdir(path, [mode], callback)

```javascript
var fs = require('fs');
fs.mkdir('aaa', function(err){
	if (err) {
		throw err;
	}
	console.log('mkdir successfully');
});
```

### rmdir
异步版的 rmdir(2). 异步版的 link(2). 完成时的回调函数（callback）只接受一个参数：可能出现的异常信息
> fs.rmdir(path, callback)

```javascript
var fs = require('fs');
fs.rmdir('aaa', function(err){
	if(err) {
		throw err;
	}
	console.log('rmdir successfully');
});
```

### readdir
异步版的 readdir(3)。 读取 path 路径所在目录的内容。 回调函数 (callback) 接受两个参数 (err, files) 其中 files 是一个存储目录中所包含的文件名称的数组，数组中不包括 '.' 和 '..'
> fs.readdir(path, callback)

```javascript
var fs = require('fs');
fs.readdir('aaa', function(err, files) {
	if(err) {
		throw err;
	}
	console.log(files);
});
```

### readdirSync
同步版的 readdir(3). 返回文件名数组，其中不包括 '.' 和 '..' 目录
> fs.readdirSync(path)

```javascript
var fs = require('fs');
var files = fs.readdirSync('aaa');
console.log(files);
```

### exists
检查指定路径的文件或者目录是否存在。接着通过 callback 传入的参数指明存在 (true) 或者不存在 (false)
> fs.exists(path, callback)

```javascript
var fs = require('fs');
fs.exists('./encoding.js', function(exists){
  console.log(exists ? '存在' : '不存在');
});
```

### existsSync
fs.exists 函数的同步版
> fs.existsSync(path)

```javascript
var fs = require('fs');

fs.existsSync(path)
```

### readline

#### 第一个例子
```javascript
var readline = require('readline');
var fs = require('fs');

var fReadName = './001.js';
var fRead = fs.createReadStream(fReadName);

var objReadLine = readline.createInterface({
	input: fRead
});

var data = [];
objReadLine.on('line', function(line){
	console.log(line);
	data.push(line);
});

objReadLine.on('close', function(){
	console.log("end...........");
	console.log("----------------------");
	console.log(data);
});
```

#### 第二个例子
```javascript
var readline = require('readline');
var fs = require('fs');
var os = require('os');

var fReadName = './001.js';
var fWriteName = './001.txt';
var fRead = fs.createReadStream(fReadName);
var fWrite = fs.createWriteStream(fWriteName);

var objReadLine = readline.createInterface({
	input: fRead
});

objReadLine.on('line', function(line){
	fWrite.write(line + os.EOL);
});

objReadLine.on('close', function(){
	console.log("end...........");
});
```

## os
操作系统 提供一些基本的操作系统相关函数。 
### os.tmpdir()
返回操作系统默认的临时文件目录 
```javascript
var os = require('os');

var result = os.tmpdir();
console.log(result);
```

### os.endianness()
返回 CPU 的字节序，可能的是 "BE" 或 "LE"。 
```javascript
var os = require('os');

var result = os.endianness();
console.log(result);
```

### os.hostname()
返回操作系统的主机名。 
```javascript
var os = require('os');

var result = os.hostname();
console.log(result);
```

### os.type()
返回操作系统名称。
```javascript
var os = require('os');

var result = os.type();
console.log(result);
```

### os.platform()
返回操作系统平台
```javascript
var os = require('os');

var result = os.platform();
console.log(result);
// win 32
```

### os.arch()
返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。 
```javascript
var os = require('os');

var result = os.arch();
console.log(result);
// ia32
```

### os.release()
返回操作系统的发行版本。 
```javascript
var os = require('os');

var result = os.release();
console.log(result);
// 10.0.10586
```

### os.uptime()
返回操作系统运行的时间，以秒为单位。 
```javascript
var os = require('os');

var result = os.uptime();
console.log(result);
```

### os.loadavg()
返回一个包含 1、5、15 分钟平均负载的数组。 
```javascript
var os = require('os');

var result = os.loadavg();
console.log(result);
```

### os.totalmem()
返回系统内存总量，单位为字节。 
```javascript
var os = require('os');

var result = os.totalmem();
console.log(result);
```

### os.freemem()
返回操作系统空闲内存量，单位是字节。 
```javascript
var os = require('os');

var result = os.freemem();
console.log(result);
```

### os.cpus()
返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。 
```javascript
var os = require('os');

var result = os.cpus();
console.log(result);
```

### os.networkInterfaces()
获取网络接口的一个列表信息
```javascript
var os = require('os');

var result = os.networkInterfaces();
console.log(result);
```

### os.EOL
一个定义了操作系统的一行结束的标识的常量。 

### 测试
```javascript
var os = require('os');

var obj = {};
obj.arch = os.arch();
obj.cpus = os.cpus();
obj.endianness = os.endianness();
obj.freemem = os.freemem();
obj.hostname = os.hostname();
obj.loadavg = os.loadavg();
obj.networkInterfaces = os.networkInterfaces();
obj.platform = os.platform();
obj.release = os.release();
obj.tmpdir = os.tmpdir();
obj.totalmem = os.totalmem();
obj.type = os.type();
obj.uptime = os.uptime();

console.log(obj);
```

## Events

> require("events");

为了处理发出的事件，我们将函数 (Function) 关联到对象上。 我们把这些函数称为 监听器 (listeners)。 在监听函数中 this 指向当前监听函数所关联的 EventEmitter 对象。

当 EventEmitter 实例遇到错误，通常的处理方法是产生一个 'error' 事件，node 对错误事件做特殊处理。 如果程序没有监听错误事件，程序会按照默认行为在打印出 栈追踪信息 (stack trace) 后退出。

EventEmitter 会在添加 listener 时触发 'newListener' 事件，删除 listener 时触发 'removeListener' 事件

### 添加事件

* 添加一个 listener 至特定事件的 listener 数组尾部。

> emitter.addListener(event, listener)
> emitter.on(event, listener)

返回 emitter，方便链式调用。


* 添加一个 一次性 listener，这个 listener 只会在下一次事件发生时被触发一次，触发完成后就被删除。

> emitter.once(event, listener)

### 删除listener

* 从一个事件的 listener 数组中删除一个 listener 注意：此操作会改变 listener 数组中在当前 listener 后的listener 的位置下标

> emitter.removeListener(event, listener)

* 删除所有 listener，或者删除某些事件 (event) 的 listener

> emitter.removeAllListeners([event])

### 获取listener

* 返回指定事件的 listener 数组

> emitter.listeners(event)


## Path
包含一套用于处理和转换文件路径的工具集。几乎所有的方法只做字符串变换， 不会调用文件系统检查路径是否有效
> require('path')

### path.normalize(p)
规范化字符串路径,多个斜杠会被替换成一个； 路径末尾的斜杠会被保留； Windows 系统上, 会使用反斜杠

### path.join
> path.join([path1], [path2], [...])

连接所有参数, 并且规范化得到的路径.

### path.resolve
> path.resolve([from ...], to)

把to 解析为一个绝对路径。
如果to不是一个相对于from 参数的绝对路径，to会被添加到from的右边，直到找出一个绝对路径为止。如果使用from路径且仍没有找到绝对路径时，使用当时路径作为目录。返回的结果已经规范化，得到的路径会去掉结尾的斜杠，除非得到的当前路径为root目录。非字符串参数将被忽略

### path.isAbsolute
> path.isAbsolute(path)

判定path是否为绝对路径。一个绝对路径总是指向一个相同的位置，无论当前工作目录是在哪里。

### path.relative
> path.relative(from, to)

破解从from到to的相对路径。

### path.dirname
> path.dirname(p)

返回路径中文件夹的名称. 类似于Unix的dirname 命令.

### path.basename
> path.basename(p, [ext])

返回路径中的最后哦一部分. 类似于Unix 的 basename 命令.