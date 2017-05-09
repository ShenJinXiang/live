const express = require('express');
const path = require('path');
const fs = require('fs');

let app = express();

app.use(express.static(process.cwd()));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	let arr = fs.readdirSync(process.cwd());
	res.render('index', {pathname: path.parse(process.cwd()).name, files: arr.join(',')});
});

app.listen(4000, function() {
	console.log('Server running at 4000 port.');
});
