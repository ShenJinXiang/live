// index.js

let express = require('express');
let path = require('path');

let route = require('./lib/routes/index');
let userRoute = require('./lib/routes/user');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('body-parser')());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', require('./lib/middleware/actionLog'));
// 路由
app.use('/', route);
app.use('/user', userRoute);

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
