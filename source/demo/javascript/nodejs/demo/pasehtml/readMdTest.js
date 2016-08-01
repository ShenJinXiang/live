var readMd = require('./readMd');

var file = './test.md';
readMd(file, function(data){
	console.log(data);
});
