// app.js

const express = require('express');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('main');
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
