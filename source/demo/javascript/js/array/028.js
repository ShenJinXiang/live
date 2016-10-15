/*
var arr1 = ['aa', 'bb', 'cc', 'dd', 'ee'];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);

var arr = [];
arr[0] = 'a';
console.log(arr);
console.log(arr.length);
arr[10] = 'b';
console.log(arr);
console.log(arr.length);
arr['msg'] = '测试数组';
console.log(arr);
console.log(arr.length);
var arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.length = 3;
console.log(arr);
arr.length = 0;
console.log(arr);
arr.length = 5;
console.log(arr);

var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
delete arr[1];
console.log(arr);
console.log(arr.length);
console.log(1 in arr);
var arr1 = new Array(5);
console.log(arr1);
var arr2 = [];
arr2[10] = 0;
console.log(arr2);
console.log(arr2.length);
console.log(arr2[1]);
*/
var arr = [11, 22, 33, 44, 55, 66];
arr.forEach(function(val, index, a){
	console.log("index:", index, " value:", val);
});
