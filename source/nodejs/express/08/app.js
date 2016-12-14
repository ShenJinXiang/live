const express = require('express');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	let data = [
		{
			name: '张三',
			age: 18,
			address: '北京'
		},
		{
			name: '李四',
			age: 23,
			address: '上海'
		},
		{
			name: '王五',
			age: 19,
			address: '天津'
		}
	];
	// 渲染index.ejs视图
	res.render('index', {title: 'express - ejs', data: data});
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
