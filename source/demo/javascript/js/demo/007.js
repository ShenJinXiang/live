var arr1 = [];
for (var i = 0; i < 10; i++) {
	arr1[i] = function () {
		console.log(i);
	}
}

arr1[0]();
arr1[1]();
arr1[2]();
arr1[3]();
arr1[4]();
arr1[5]();
arr1[6]();
arr1[7]();
arr1[8]();
arr1[9]();


console.log("-------------------------------------");
var arr2 = [];
for (let j = 0; j < 10; j++) {
	arr2[j] = function () {
		console.log(j);
	}
}

arr2[0]();
arr2[1]();
arr2[2]();
arr2[3]();
arr2[4]();
arr2[5]();
arr2[6]();
arr2[7]();
arr2[8]();
arr2[9]();
console.log("-------------------------------------");

var arr3 = [];
for (var k = 0; k < 10; k++) {
	arr3[k] = (function(n) {
		return function () {
			console.log(n);
		}
	})(k);
}
arr3[0];
arr3[1];
arr3[2];
arr3[3];
arr3[4];
arr3[5];
arr3[6];
arr3[7];
arr3[8];
arr3[9];


(function(n){
		console.log(n);
})(1)
