var fs = require('fs');

fs.stat('./mkdir.js', function(err, stats){
	if(err) throw err;
	console.log(stats);
	console.log("----------------");
	console.log(stats.isFile());
	console.log(stats.isDirectory());
});
