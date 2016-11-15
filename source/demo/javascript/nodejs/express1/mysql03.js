var query = require('./mysql01');

query({
	sql: 'select * from user',
	values: []
}, function (err, results) {
	if (err) throw err;
	console.log(results);
});
