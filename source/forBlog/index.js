let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("<h1>shenjinxiang</h1>");
	res.end();
});

app.listen(4000, function() {
	console.log('server running at 4000 port.');
});
