var query = require('./mysql/query');

query({
	sql: 'select * from user',
	values: []
}, function (err, results) {
	if (err) throw err;
	console.log(results);
});
