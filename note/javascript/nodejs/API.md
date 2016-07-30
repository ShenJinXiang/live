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