var fs = require('fs');
fs.readFile('test.md', 'utf8', function(err, data){
	if(err) throw err;
	console.log(data);
});
