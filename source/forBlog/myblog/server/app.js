const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(getStaticPath()));

app.listen(4000, function() {
	console.log('Server running at 4000 port.');
});

function getStaticPath() {
	if (process.argv.length <= 2) {
		return process.cwd();
	}
	if (!!process.argv[2]) {
		return process.argv[2];
	}
	return path.join(__dirname, '../');
}
