var query = require('./query');

query.queryList('select * from demo', function (data) {
	console.log(data);
});
