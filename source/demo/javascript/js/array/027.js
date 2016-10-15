var empty = []; // 没有元素的数组
var arr1 = [1, 2, 3, 4, 5]; // 创建5个数值的数组
var arr2 = [1, true, 'abcd', 1.1, {x: 1, y: 2}]; // 元素类型不同的数组
var arr3 = new Array();
var arr4 = new Array(10);
var arr5 = new Array(5, 4, 2, true, 'test', new Object());consoleArr(empty);
consoleArr(arr3);
consoleArr(arr4);
consoleArr(arr5);
function consoleArr(arr) {
	console.log(arr);
}
