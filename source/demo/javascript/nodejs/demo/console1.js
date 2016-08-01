var flag = true;
var NUM = 50;
var index = 1;
setInterval(function(){
	var str1 = '';
	var str2 = '';
	for(var i = 0; i < (NUM - index); i++) {
		str1 += ' ';
	}
	for(var i = 0; i < (2 * index) - 1; i++) {
		str2 += '*';
	}
	console.log(str1 + str2);
	if(index >= NUM) {
		flag = false;
	}
	if(index <= 1) {
		flag = true;
	}
	if(flag) {
		index++;
	} else {
		index--;
	}
}, 50 * 1);
