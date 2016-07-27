(function(){
	var s = 'hello world';
	s.toUpperCase();
	console.log(s.toUpperCase());
	console.log(s);

	console.log("undefined == undefined : " + undefined == undefined);
	console.log("undefined === undefined : " + undefined === undefined);
	console.log('------------------------------------');

	(function(){
		var a = [];
		var b = a;
		b[0] = 1;
		console.log("a[0] : " + a[0]);
		console.log('a : ' + a);
		console.log('b : ' + b);
		console.log("a == b : " + a == b);
		console.log("a === b : " + a === b);
	})();

	console.log('hello world ' * 5);
	console.log('7' * '4');

	console.log('------------------------------------');
	console.log("null == undefined : " + (null == undefined));
	console.log("'0' == 0 : " + ("0" == 0));
	console.log("0 == false : " + (0 == false));
	console.log("'0' == false : " + ("0" == false));
})();
