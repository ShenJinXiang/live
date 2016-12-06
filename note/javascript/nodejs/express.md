# express-1

## 初始步骤

**安装express**
```
npm install --save express
```
运行npm install会把指定名称的包安装到node_modeles目录下。如果使用了--save喧嚣，还会更新package.json文件。node_modules可以使用npm重新生成，所以不需要把这个文件添加到代码库中，.gitignore 配制忽略这个目录

**第一个列子**
```javascript
const express = require('express');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(function (req, res) {
	res.type('text/plian');
	res.status(404);
	res.send('404 - Not Found.');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - server Error.');
});

app.linsten(app.get('port'), function () {
	console.log('Express started on http://localhost:' + app.get('port') +'; press Ctrl_c' to terminate.);
});
```

由于还没有给Express任何路由信息，所以会返回一个404页面，表示访问的页面不存在， 添加路由：
```javascript
app.get('/', function(req, res) {
	res.type('text/plain');
	res.send('index');
});

app.get('/about', function (req, res) {
	res.type('text/plain');
	res.send('about');
});
```

默认忽略大小写或反斜杠

我们这次使用的不是 Node 的 res.end，而是换成了 Express 的扩展 res.send。我们还用res.set 和 res.status 替换了 Node 的 res.writeHead。Express 还提供了一个 res.type 方 法，可以方便地设置响应头 Content-Type。尽管仍然可以使用 res.writeHead 和 res.end， 但没有必要也不作推荐

我们对定制的 404 和 500 页面的处理与对普通页面的处理应有所区别:用的不是app.get，而是 app.use。app.use 是 Express 添加中间件的一种方法

