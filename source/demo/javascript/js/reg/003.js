var str1 = '123,456,789';
console.log(str1.split(","));

var str2 = '123, 456, 789';
console.log(str2.split(/\s*,\s*/));

var str3 = '123   ,  456 , 789';
console.log(str2.split(/\s*,\s*/));
