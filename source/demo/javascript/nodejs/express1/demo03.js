var str = 'insert into user values (#{name }, #{password}, #{ address}, #{ age })';

var reg1 = /(\#\{){1}\s*\w+\s*\}{1}/g
var reg2 = /^\s+|\s+$/g
var params = str.match(reg1);
var arr = params.map(function (item, index) {
	return item.substring(2, item.length - 1).replace(reg2, '');
});
console.log(arr);
