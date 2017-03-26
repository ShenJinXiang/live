const express = require('express');
const path = require('path');

const app = express();

console.log(process.argv[2]);
app.use(express.static(process.argv[2] ? process.argv[2] : path.join(__dirname, 'public')));

app.listen(4000, function() {
	console.log("server running at 4000 post.");
});
