var os = require('os');

var obj = {};
obj.arch = {
	'desc' : "操作系统cpu架构，可能的值有 ‘x64’ ‘arm’ ‘ia32’",
	'val' : os.arch()
};

obj.cpus = {
	'desc' : '安装的每个cpu内核的信息：型号 速度 时间',
	'val' : os.cpus()
};

obj.endianness = {
	'desc' : "cpu的字节数，可能是 ‘BE’ ‘LE’",
	'val' : os.endianness()
};

obj.freemem = {
	'desc' : '操作系统空闲内存量',
	'val' : os.freemem()
};

obj.hostname = {
	'desc' : "系统主机名",
	'val' : os.hostname()
};

obj.loadavg = {
	'desc' : '返回一个包含 1、5、15 分钟平均负载的数组',
	'val' : os.loadavg()
};

obj.networkInterfaces = {
	'desc' : '获取网络接口的一个列表信息',
	'val' : os.networkInterfaces()
};

obj.platform = {
	'desc' : '返回操作系统平台',
	'val' : os.platform()
};

obj.release = {
	'desc' : '返回操作系统的发行版本',
	'val' : os.release()
};

obj.tmpdir = {
	'desc' : '返回操作系统默认的临时文件目录',
	'val' : os.tmpdir()
};

obj.totalmem = {
	'desc' : '返回系统内存总量',
	'val' : os.totalmem()
};

obj.type = {
	'desc' : '返回操作系统名称',
	'val' : os.type()
};

obj.uptime = {
	'desc' : "返回操作系统运行的时间",
	'val' : os.uptime()
};

console.log(obj);
