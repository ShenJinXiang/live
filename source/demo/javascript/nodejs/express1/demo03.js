var str = 'insert into user values (#{name }, #{password}, #{ address}, #{ age })';

var reg1 = /(\#\{){1}\s*\w+\s*\}{1}/g

// var reg2 = /(?i)(?<=\#\{)((?!\#\{).)*(?=\})/g

var params = str.match(reg1);
var reg2 = /^\s+|\s+$/g
console.log(params);
var arr = params.map(function (item, index) {
	// console.log(item, index);

	var re =  item.substring(2, item.length - 1);
	
	return re.replace(reg2, '');
});
console.log(arr);
