function max() {
	console.log("接收到的参数是: ", arguments);
	if(arguments.length <= 0) {
		return null;
	}
	var result = arguments[0];
	for(var i = 0; i < arguments.length; i++) {
		result = (arguments[i] > result) ? arguments[i] : result;
	}
	return result;
}

console.log(max());
console.log(max(1, 2));
console.log(max(22, 23, 3, 34, 88, 99));
