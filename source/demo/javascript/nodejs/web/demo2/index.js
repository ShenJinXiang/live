var server = require('./server');
var router = require('./router');
var handle = require('./requestHandler');

var requestHandler = {};
requestHandler['/start'] = handle.start;
requestHandler['/upload'] = handle.upload;
requestHandler['/001.html'] = handle.html1;

server.start(router.route, requestHandler);
