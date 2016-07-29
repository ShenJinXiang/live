# server

tags:nodejs

---

## 第一个实例
* server.js

```javascript
var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('hello node.js');
	res.end();
}).listen(9999);
console.log('server start on 9999 port ^_^ ');
```

### 使用supervisor
> npm install -g supervisor
> supervisor app.js