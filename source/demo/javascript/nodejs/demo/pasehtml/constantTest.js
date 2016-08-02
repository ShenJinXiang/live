var reg = require('./constant').regular;

var str = ' ## 安守本分';

for(var r in reg) {
	if(reg[r].test(str)) {
		console.log(str, r, reg[r]);
	}
}
