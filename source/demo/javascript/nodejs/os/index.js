var os = require('os');

var obj = {};
obj.arch = os.arch();
obj.cpus = os.cpus();
obj.endianness = os.endianness();
obj.freemem = os.freemem();
obj.hostname = os.hostname();
obj.loadavg = os.loadavg();
obj.networkInterfaces = os.networkInterfaces();
obj.platform = os.platform();
obj.release = os.release();
obj.tmpdir = os.tmpdir();
obj.totalmem = os.totalmem();
obj.type = os.type();
obj.uptime = os.uptime();

console.log(obj);
