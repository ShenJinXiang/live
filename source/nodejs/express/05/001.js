var nodemailer = require('nodemailer');

var mailTransport = nodemailer.createTransport('SMTP', {
	host: 'smtp.163.com',
	secureConnection: true,
	auth: {
		user: 'sjx-sword@163.com',
		pass: '6098--hanzhiyun'
	}
});

mailTransport.sendMail({
	from: 'sjx-sword@163.com',
	to: '243886005@qq.com',
	subject: '用来测试nodejs的email功能',
	text: '这是个测试用的邮件，测试能发通过nodejs发送邮件，有点小忐忑哦。。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。有点小忐忑哦。'
}, function (err) {
	if (err) {
		console.error('Unable to send email: ' + err);
	}
});
