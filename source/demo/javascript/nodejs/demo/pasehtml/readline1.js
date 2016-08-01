var fs = require('fs');
var readline = require('readline');

var objReadLine = readline.createInterface({
	input : fs.createReadStream('./test.md')
});

var data = [];
objReadLine.on('line', function(line){
	data.push(line);
});

objReadLine.on('close', function(){
	console.log(data);
});
