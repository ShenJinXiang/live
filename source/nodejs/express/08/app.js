const express = require('express');

let app = express();

app.use(require('body-parser')());

/**
 * 一个简单的登陆表单，要求用户输入用户名和密码
 * 采用post提交方式
 */
app.get('/', function(req, res) {
	let str = '<form action="/login" method="post">' + 
						'<label for="username">用户名：</label>' +
						'<input type="text" id="username" name="username" /><br>' +
						'<label for="password">密码：</label>' +
						'<input type="password" id="password" name="password" /><br>' +
						'<input type="submit" value="登录" />';
	res.type('text/html');
	res.send(str);
});

app.post('/login', function (req, res) {
	let username = req.body.username;
	let password = req.body.password;
	res.type('text/html');
	res.send('<p>用户名: ' + username + '</p><p>密码: ' + password + '</p>');
});

app.get('/user', function (req, res) {
	let username = req.query.username;
	let password = req.query.password;
	res.type('text/html');
	res.send('<p>用户名: ' + username + '</p><p>密码: ' + password + '</p>');
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
