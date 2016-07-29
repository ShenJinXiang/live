/*
for(var i = 0; i < 100; i++) {
	console.log("num: %5d", i);
}
*/
console.time("push");
var num = 1000000;
var arr = new Array();
var arr1 = new Array(num);
for(var i = 0; i < num; i++) {
	arr.push(i);
}
console.timeEnd("push");

console.time("put");
for(var i = 0; i < num; i++) {
	arr1[i] = i;
}
console.timeEnd("put");
