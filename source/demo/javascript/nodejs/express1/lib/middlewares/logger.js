// lib/middlewares/logger.js

// 打印请求方式、路径、参数
function logger () {
	return function (req, res, next) {
		console.log('请求方式：', req.method);
		console.log('请求路径：', req.url);
		if (req.method === 'GET' || req.method === 'get') {
			console.log('请求参数：', req.query);
		}
		if (req.method === 'POST' || req.method === 'post') {
			console.log('请求参数：', req.body());
		}
		next();
	}
}

module.exports = logger;
