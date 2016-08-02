var readLines = require('./readLines');

var fileName = './readLines.js';
readLines(fileName, function(data){
	console.log(data.join('\n'));
});
