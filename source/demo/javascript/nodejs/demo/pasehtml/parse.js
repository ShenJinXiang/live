var constant = require('./constant');
function parse(data, callback) {
	var result = [];
	var codeStatus = 'default';
	for(var i = 0; i < data.length; i++) {
		result.push(parseLine(data[i]));
	}

	function parseLine(line) {
		var regs = constant.regular;
		var reg_result = '';
		if(codeStatus == 'default') {
			for(var r in regs) {
				if(regs[r].test(line)) {
					reg_result = r;
					break;
				}
			}

		}
	}

}
