# let 命令
**块级作用域**

```javascript
for (var i = 0; i < 10; i++) {
	// ..
}

console.log(i); // 10

for (let j = 0; j < 10; j++) {
	//...
}
console.log(j); // ReferenceError: j is not defined
```

因为var申明的作用域问题，每循环一次，新的i会覆盖原来的值，导致，调用结果为10：
```javascript
var arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] = function () {
		console.log(i);
	};
}
arr[3](); // 10
```

为了解决这个问题，我们需要引入闭包还解决作用域问题：
```javascript
var arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] = (function (x) {
		return function () {
			console.log(x);
		};
	})(i);
}
arr[3]();
```

如果使用let，因为i只在当前循环有效，所以结果为：
```javascript
var arr = [];
for (let i = 0; i < 10; i++) {
	arr[i] = function () {
		console.log(i);
	};
}
arr[3](); // 3
```

**不存在变量提升**

先申明，再使用，否则报错
```javascript
console.log(a); // 报错ReferenceError
console.log(b); // undefined

let a = 2;
var b = 3;
```

**不允许重复声明**

let不允许在相同作用域内，重复声明同一个变量

```javascript
function func1 (arg) {
	let arg;	// 报错
}

function func2 (arg) {
	{
		let arg;	// 不报错
	}
}
```

# ES6的块级作用域
let 为es6提供了块级作用域

```javascript
function func1 () {
	var num = 5;
	if (true) {
		var num = 6;
	}
	console.log(num);	// 6
}
function func2 () {
	let num = 5;
	if (true) {
		let num = 6;
	}
	console.log(num); // 5
}
```

ES6允许块级作用域任意嵌套
> {{{{ let a = 'Hello JavaScript'; }}}}

块级作用域概念可以用来替代立即调用匿名函数

# 块级作用域与函数声明

函数不能在块级作用域中申明，只能在顶层作用域和函数作用域中申明


