var readLines = require('./readlines');
var parseLine = require('./parseLine');

var fileName = './test.md';

readLines(fileName, function(data){
	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
		console.log(parseLine(data[i]));
	}
});
