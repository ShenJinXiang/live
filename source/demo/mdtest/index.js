let markdown = require('markdown').markdown;
let fs = require('fs');

fs.readFile('test.md', 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}
	console.log(data);
	console.log('--------------------------');
	console.log('--------------------------');
	console.log('--------------------------');
	let result = markdown.toHTML(data);
	console.log(result);
	fs.writeFile('./test.html', result, function (err) {
		if (err) throw err;
	});
});
