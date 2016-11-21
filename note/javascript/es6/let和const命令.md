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

ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明

ES6引入了块级作用域，明确允许在块级作用域之中声明函数

并且ES6规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用


# const命令
const 声明一个只读的常量，一旦声明，常量的值就不能改变

* const一旦声明常量，就必须马上初始化
* const与let相同，只在声明所在的块级作用域有效
* const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用
* 对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址，const命令只是限制变量名指向的地址不变



