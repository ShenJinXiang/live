var str = 'insert into user (`id`, `name`, `username`, `password`, `email`, `age`, `address`, `desc`) values (UUID(), #{name}, #{username}, #{password}, #{email}, #{age}, #{address}, #{desc})'

var reg = /(\#\{){1}\w\}{1}/;
// var result = str.replace(reg, '?');
var result = str.match(reg);
console.log(result);
