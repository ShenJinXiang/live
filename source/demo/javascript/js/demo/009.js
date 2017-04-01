var regObj = {
	'shfzhh': new RegExp("^(^\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$"),
	'shjhm': new RegExp('^[1]+[3,5,7,8]+\d{9}$'),
	'dhhm': new RegExp('^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$'),
	'youb': new RegExp('^\d{6}$'),
	'youxiang': new RegExp('^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,5})\s*$'),
	'xingm': new RegExp('^[\u4e00-\u9fa5]{2,4}$')
};

console.log(regObj.xingm.test('申1锦祥'));
