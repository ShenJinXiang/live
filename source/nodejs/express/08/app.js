const express = require('express');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/user', function (req, res) {
	let obj = {
		'data' : {
			'name': 'shenjinxiang',
			'age': 30,
			'address': '太原'
		}
	};
	res.render('index', obj);
});

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
