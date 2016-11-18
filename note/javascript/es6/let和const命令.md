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

**不允许重复声明**
let不允许在相同作用域内，重复声明同一个变量
