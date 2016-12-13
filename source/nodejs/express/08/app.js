const express = require('express');

let app = express();

app.use(express.static('public'));

app.listen(3000, function () {
	console.log('Server running at 3000 port.');
});
