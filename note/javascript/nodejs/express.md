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
