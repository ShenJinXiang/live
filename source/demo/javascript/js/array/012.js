var arr = [1, 2, 3];
var arr1 = arr.concat(4, 5);
var arr2 = arr.concat([4, 5]);
var arr3 = arr.concat([4, 5], [6, 7]);
var arr4 = arr.concat(4, [5, [6, 7]]);

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
