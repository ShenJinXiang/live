var query = require('./mysql01');
var sqlConfig = require('./sqlConfig');
var uuid = require('node-uuid');

var obj = {
	sql: sqlConfig['queryAllUser'].sql,
	values: sqlConfig['queryAllUser'].values || []
}
query(obj, function(err, results) {
	if (err) throw err;
	console.log(results);
});
