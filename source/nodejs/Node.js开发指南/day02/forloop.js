// forloop.js

var fs = require('fs');
var files = ['a.txt', 'b.txt', 'c.txt'];

for(var i = 0; i < files.length; i++) {
	(function(i) {
		fs.readFile(files[i], 'utf-8', function(err, data) {
			console.log(files[i], data);
		});
	})(i);
}
