var fs = require('fs');
fs.mkdir('aaa/b', function(err){
	if (err) {
		throw err;
	}
	console.log('mkdir successfully');
});
