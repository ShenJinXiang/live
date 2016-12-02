exports.index = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>index.js</h1>');
	res.end();
};

exports.userList = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>userList</h1>');
	res.end();
};

exports.addUser = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>addUser</h1>');
	res.end();
};

exports.updUser = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>updUser</h1>');
	res.end();
};

exports.delUser = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>delUser</h1>');
	res.end();
};

