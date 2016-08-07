# JavaScript

tags:javascript

---

## 对象
### 术语

* 内置对象(native object) 是由ECMAScript规范定义的对象或类。例如：数组、函数、日期和正则表达式
* 宿主对象(host object) 是由JavaScript解释器所嵌入的宿主环境（比如Web浏览器）定义的。客户端JavaScript中表示网页结构的HTMLElement对象均是宿主对象。宿主对象也可以当成内置对象
* 自定义对象(user-defined object) 由运行中的JavaScript代码创建的对象 
* 自有属性(own property) 是直接在对象中定义的属性
* 继承属性(inherited property) 是在对象的原型对象中定义的属性

### 创建对象
可以通过对象直接量、关键字new和Object.create()函数来创建对象。
#### 对象直接量
由若干名/值对组成的映射表，名/值对中间用冒号风格，名/值 对之间用逗号分隔，整个映射表用花括号括起来。

属性名可以是JavaScript标识符也可以是字符串直接量（包括空字符串）。属性的值可以是任意类型的JavaScript属性的值。

```javascript
var empty = {};
var point = {x: 0, y: 0};
var point2 = {x: ponit.x, y: point.y + 1};
```

#### 通过new创建对象
new运算符创建并初始化一个新对象。关键字new后跟随一个函数调用。这个函数称做构造函数(constructor)。 JavaScript中的原始类型都包含内置构造函数。
```javascript
var o = new Object(); // 创建一个空对象，和{}一样
var a = new Array(); // 创建一个空数组，和[]一样
var d = new Data(); // 创建一个表示当前时间的Date对象
var r = new RegExp('ja'); // 创建一个可以进行模式匹配的RegExp对象
```
除了内置构造函数，也可以用自定义构造函数来初始化新对象

#### 原型
每一个JavaScript对象（null除外）都和另一个对象相关联。“另一个”对象就是原型，每个对象都从原型继承属性。

所有通过对象直接量创建的对象都具有同一个原型对象，并可以通过JavaScript代码Object.prototype获得对原型对象的引用。
通过关键字new和构造函数调用创建的对象的原型就是构造函数的prototype属性的值。如：
* new Object()创建的对象也继承自Object.prototype
* new Array()创建的对象的原型就是Array.prototype
* new Date()创建的对象的原型就是Date.prototype.

Object.prototype没有原型对象

#### Object.create()
用于创建一个新对象，第一个参数这个对象的原型。
```javascript
var o1 = Object.create({x: 1, y: 2}); // o1继承了属性 x和y
```
创建没有原型的新对象：
```javascript
var o2 = Object.create(null); // o2 不继承任何属性和方法
```

创建一个普通的空对象：
```javascript
var o3 = Object.create(Object.prototype); // o3 和{} 和 new Object()一样
```

> 通过原型继承创建一个新对象

```javascript
function inherit(p) {
    if(p == null) throw TypeError();
    if(Object.create)
        return Object.create(p);
    var t = typeof p;
    if(t !== 'object' && t !== 'function' ) throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}
```

### 属性的查询和设置
通过点(.)运算符或方括号([])来获取属性的值
#### 继承
**读取属性的值的细节**
假设要查询对象o的x 属性的值，如果o中不存在x，那么在o的原型对象中查询属性x，如果原型对象中也没有x，如果这个原型对象也有原型，那么继续在这个原型对象的原型上插座x，直到原型对象是null的对象为止。

属性赋值操作先检查原型链，以此判断是否允许赋值操作，如果是继承自原型的只读属性，那么赋值操作是不允许的。如果允许赋值操作原始对象，不会改变原型链上的对象。**在JavaScript中只有查询才体会到原型的存在，而设置属性则和继承无关。**

#### 属性访问错误
* 查询一个不存在的属性不会报错，会返回undefined
* 如果对象不存在，就会报错，null和undefined都没有属性，查询这些值的属性会报错

### 删除属性
* delete 可以删除对象的属性，delete只是断开属性和宿主对象的联系，而不会操作属性中的属性。 
* delete 只能删除自由属性，不能删除继承属性 
* delete不能删除可配置性未false的属性

### 检测属性
in运算符、hasOwnProperty()、propertyIsEnumerable()或者属性查询等方式检测属性。

#### in 运算符
左侧属性名，右侧对象，如果对象的自有属性或继承属性中包含则返回true
```javascript
// in 运算符
var o = {x: 1};
console.log('"x" in o : ', ('x' in o));  // "x" in o :  true
console.log('"y" in o : ', ('y' in o));  // "y" in o :  false
console.log('"toString" in o : ', ('toString' in o)); // "toString" in o :  true
```
#### hasOwnProperty()
对象的hasOwnProperty()方法用来检测给定的名字是否是对象的自有属性，对于继承的属性将返回false
```javascript
var o = {x: 1};
console.log(o.hasOwnProperty('x')); // true
console.log(o.hasOwnProperty('y')); // false
console.log(o.hasOwnProperty('toString')); // false
```

#### propertyIsEnumerable()
propertyIsEnumerable()是hasOwnProperty的增强版，只有检测到是自有属性且这个自由属性的可枚举性为true才返回true。
```javascript
o = Object.create({y: 2});
o.x = 1;
console.log(o.propertyIsEnumerable('x')); // true
console.log(o.propertyIsEnumerable('y')); // false
console.log(Object.prototype.propertyIsEnumerable('toString')); // false
```

### 枚举属性
#### for/in循环
for/in 循环可以遍历对象中所有可枚举的属性(包括自有属性和继承属性)
```javascript
var o = {x: 1, y: 2, z: 3};
for var p in o {
    console.log(p);
}
```

* 跳过继承的属性

```javascript
for var p in o {
    if(!o.hasOwnProperty(p)) continue;
}
```

* 跳过方法(属性的值是方法)

```javascript
for var p in o {
    if(typeof o[p] === 'function') continue;
}
```

#### Object.keys()
返回一个数组，这个数组由对象中可枚举的自有属性的名称组成

#### Object.getOwnPropertyNames()
返回对象的所有自有属性的名称，而不仅仅是可枚举的属性

### 属性getter和setter
由getter和setter定义的属性称做“存取器属性”

当程序查询存取器属性的值时，JavaScript调用getter方法，这个返回的返回值就是属性存取表达式的值。当程序设置一个存取器属性的值时，JavaScript调用setter方法，设置属性值，可以忽略setter方法的返回值。

存取器属性不具有可写性，如果同时具有getter和setter方法，那么这个属性是一个读/写属性，如果只有getter那么是个只读属性，如果只有setter方法，那么是一个只写属性。读取只写属性总是返回undefined。

```javascript
var obj = {
	val: 100,
	get prop() {
		return this.val;
	},
	set prop(x) {
		this.val = x;
	}
};
console.log(obj.prop); // 100
obj.prop = 11;
console.log(obj.prop); // 11
```

### 属性的特性
一个属性包含一个名字和四个特性，分别是：值(value)、可写性(writable)、可枚举性(enumerable)和可配置性(configurable)

存取器属性不具有值特性和可写性，它们的可写性是由setter方法存在与否决定的

#### Object.getOwnPropertyDescriptor()
通过调用Object.getOwnPropertyDescriptor()可以获得某个对象特定属性的属性描述符
```javascript
var o = {x: 1};
var desc = Object.getOwnPropertyDescriptor(o, 'x');
console.log(desc);
// { value: 1, writable: true, enumerable: true, configurable: true }
```

对于继承属性和不存在的属性则返回undefined
```
var o = {x: 1};
var desc1 = Object.getOwnPropertyDescriptor(o, 'y'); // undefined
var desc2 = Object.getOwnPropertyDescriptor(o, 'toString'); // undefined
```

#### Object.defineProperty()

```javascript
var o = {};
Object.defineProperty(o, 'x', {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});

console.log(o); // {}
console.log(o.x); // 1
console.log('x' in o); // true
```

#### Object.defineProperties()
同时修改或创建多个属性，第一个参数是要修改的对象，第二个参数是个映射表，包含要修改或新增的属性以及描述符。
```javascript
var o = {};
var p = Object.defineProperties(o, {
    x: {value: 1, writable: true, enumerable: true, configurable: true},
    y: {value: 2, writable: true, enumerable: true, configurable: true},
    r: {
        get: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: true,
        configurable: true
    }
});

console.log(o); // { x: 1, y: 2, r: [Getter] }
console.log(p); // { x: 1, y: 2, r: [Getter] }
console.log(o === p) // true
```

* 如果对象是不可扩展的，则可以编辑已有的自有属性，但不能添加新属性
* 如果属性是不可配置的，则不能修改它的可配置性和可枚举性
* 如果存取器属性是不可配置的，则不可以改变其getter和setter方法，也不能将它转换为数据属性
* 如果数据属性是不可配置的，则不能将其转换为存取器属性
* 如果数据属性是不可配置的，则不能将它的可写性从false转成true，但可以从true修改成false
* 如果数据属性是不可配置也不可写的，则不能修改它的值。然后可配置但不可写属性的值是可以修改的，（实际是标记为可写的，然后修改它的值，最后转为不可写的）

### 对象的三个属性
每个对象都有与相关的原型(prototype)、 类(class)和可扩展性(extensible attribute)

#### 原型属性
将对象作为参数传递给Object.getPrototypeOf()可以查询它的原型。
要检测一个对象是否是另外一个对象的原型（或处于原型链中），可以使用isPrototypeOf()方法
```javascript
var p = {x: 1};
var o = Object.create(p);
console.log(Object.getPrototypeOf(o) == p); // true
console.log(p.isPrototypeOf(o)); // true
console.log(Object.prototype.isPrototypeOf(o)); // true
```

#### 类属性
对象的类属性是一个字符串，表示对象的类型信息。

默认的toString()方法返回的格式为：
> [object class]

```javascript
function classof(o) {
    if (o === null) return 'Null';
    if (o === undefined) return 'Undefined';
    return Object.prototype.toString.call(o).slice(8, -1);
}

console.log('classof(undefined) : ', classof(undefined));
console.log('classof(null) : ', classof(null));
console.log('classof(1) : ', classof(1));
console.log('classof("") : ', classof(""));
console.log('classof(false) : ', classof(false));
console.log('classof({}) : ', classof({}));
console.log('classof([]) : ', classof([]));
console.log('classof(/./) : ', classof(/./));
console.log('classof(new Date()) : ', classof(new Date()));
function f() {};
console.log('classof(new f()) : ', classof(new f()));

/**
运行结果
classof(undefined) :  Undefined
classof(null) :  Null
classof(1) :  Number
classof("") :  String
classof(false) :  Boolean
classof({}) :  Object
classof([]) :  Array
classof(/./) :  RegExp
classof(new Date()) :  Date
classof(new f()) :  Object
*/
```

#### 可扩展性
对象的可扩展性用来表示是否可以给对象添加新属性
将对象作为参数传给Object.isExtensiable()来判断是否可扩展

**Object.preventExtensions()**
1. 将对象作为参数传给Object.preventExtensions()设置不可扩展 
2. 一旦设置了不可扩展，就无法转成可扩展了
3. preventExtensions只会影响对象本身，如果给对象的原型增加属性，它也会继承这个属性

**Object.seal()**
除了能将对象设置为不可扩展的，还可以将对象的所有自有属性设置成不可配置的。即不能添加新属性，现有属性也不可删除和配置，不过对已又的可写属性，依然可以设置。

可以用Object.isSealed()来检测对象是否封闭

**Object.freeze()**
Object.freeze() "冻结对象"，将对象设置为不可扩展和不可配置，将所有自由属性设置成只读。

使用Object.isFrozen()检测是否冻结

### 序列化对象
对象序列化(serialization)是指将对象的状态转换为字符串，也可以将字符串还原为对象。

JSON.stringify() 和JSON.parse()序列化和还原JavaScript对象。

> JSON JavaScript Object Notation JavaScript对象表示法

```javascript
var o = {x: 1, y: {z: [false, null, '']}};
var s = JSON.stringify(o);
var p = JSON.parse(s);
console.log(o); // { x: 1, y: { z: [ false, null, '' ] } }
console.log(s); // {"x":1,"y":{"z":[false,null,""]}}
console.log(p); // { x: 1, y: { z: [ false, null, '' ] } }
```

### 对象方法
#### toString()方法
toString()方法没有参数，返回一个表示调用这个方法的对象值的字符串。
```javascript
var s = {x: 1, y: 1}.toString();    // [object Object]
```
#### toLocaleString() 方法
返回表示这个对象的本地化字符串
Date和Number类对toLocaleString()方法做了定制

#### toJSON() 方法
Object.prototype实际上没有定义toJSON()方法，但对于需要执行序列化的对象来说，JSON.stringify()方法会调用toJSON()方法。

#### valueOf() 方法


## 数组

1. 数组的值是有序集合，每个值叫做一个元素，而每个元素在数组中有一个位置，以数字表示，称为索引
2. JavaScript数组是无类型的，数组元素可以是任意类型，并且同一个数组中的不同元素也可能有不同的类型
3. 数组的元素甚至也可能是对象或其他数组
4. 数组的索引是基于零的32位数值：第一个元素的索引为0，最大可能的索引为2^32 - 2
5. 数组是动态的，根据需要它们会增长或缩减
6. 数组可能是稀疏的：数组的索引不一定要连续的，它们之间可以有空缺
7. 每个JavaScript数组都有length属性，针对非稀疏数组，该属性就是数组元素的个数，针对稀疏数组，length比所有元素的所有要大

### 创建数组
#### 数组直接量
创建数组最简单的方法，在方括号中将数组元素用逗号隔开即可。
```javascript
var empty = []; // 没有元素的数组
var primes = [2, 3, 5, 7, 11]; // 有5个数值的数组
var misc = [1.1, true, 'a',]; // 3个不同类型的元素
console.log(misc); // [ 1.1, true, 'a' ]
```
#### 构造函数Array()
```javascript
// 调用时没有参数
var a = new Array();
// 调用时有一个数值参数，制定数组长度
var a = new Array(10);
// 显式指定两个或多个数组元素或者数组的一个非数值元素
var a = new Array(5, 4, 3, 2, 1, 'testing');
```

### 数组元素的读和写
使用[]操作符来访问数组中的一个元素

数组是对象的特殊形式。使用方括号访问数组元素就像用方括号访问对象的属性一样

只有0~2^32 -2 之间的整数属性才是索引

所有数组都是对象，可以为其创建任意名字的属性，但如果使用的属性是数组的索引，数组的特殊行为就是将根据需要更新它们的length属性值

### 稀疏数组
稀疏数组就是包含从0开始的不连续索引的数组。

稀疏数组的length属性值大于元素的个数。
```javascript
a = new Array(5); // 数组没有元素，但是a.length的值是5
a = []; // 创建一个空数组 length = 0
a[1000] = 0; // 添加一个元素，length为1001
```

### 数组长度
每个数组都有一个length属性
```javascript
a = [1, 2, 3, 4, 5]; 
a.length = 3; // 现在a为[1, 2, 3]
a.length = 0; // 删除所有元素，a 为 []
a.length = 5; // 长度为5，但是没有元素，就像new Array(5)
```

### 数组元素的添加和删除
####为新索引赋值
```javascript
a = [];
a[0] = 'zero';
a[1] = 'one';
```

#### push() 方法
可以使用push()方法在数组末尾增加一个或多个元素
```javascript
var a = []; 
a.push('zero');
console.log(a); // [ 'zero' ]
a.push('one', 'two');
console.log(a); // [ 'zero', 'one', 'two' ]
```

#### unshift() 方法
在数组的首部插入一个元素，并将其他元素一次移到更高的索引处
```javascript
var b = [];
b.unshift('aa');
console.log(b); // [ 'aa' ]
b.unshift('bb', 'cc');
console.log(b); // [ 'bb', 'cc', 'aa' ]
```

#### delete运算符
可以像删除对象属性一样使用delete运算符来删除数组元素
```javascript
a = [1, 2, 3, 4];
delete a[1];
console.log(a); // [ 1, , 3, 4 ]
console.log(1 in a); // false
console.log(a.length); // 4 
```

* delete操作并不影响数组长度
* 使用delete删除一个元素，数组变成稀疏数组

#### pop() 方法
使数组长度减少1 并返回被删除的元素的值
```javascript
var a = [1, 2, 3, 4, 5];
console.log(a.pop()); // 5
console.log(a); // [ 1, 2, 3, 4 ]
console.log(a.length); // 4
```

#### shift() 方法
从数组头部删除一个元素，和delete不同的是shift() 方法将所有元素下移至当前索引低1的地方
```javascript
var a = [1, 2, 3, 4, 5];
console.log(a.shift()); // 1
console.log(a); // [ 2, 3, 4, 5 ]
console.log(a.length); // 4
```

### 数组遍历
#### 使用for循环
```javascript
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i < arr.length; i++) {
    // 循环体
}
```
对于稀疏数组，要排除null、undefined和不存在的元素
```javascript
var arr = [1, 2, 3, 4, 5, 6];
delete arr[2];
for(var i = 0; i < arr.length; i++) {
    if(!arr[i]) continue;
    // 循环体
}
```
如果只想跳过undefined和不存在的元素：
```javascript
for(var i = 0; i < arr.length; i++) {
    if(a[i] === undefined) continue;
    // 循环体
}
```
如果只想跳过不存在的元素 仍然要处理存在的undefined元素：
```javascript
for(var i = 0; i < arr.length; i++) {
    if(!(i in arr)) continue;
    // 循环体
}
```

#### for/in 循环
for/in循环遍历稀疏数组时，可以过滤掉不存在的元素
```javascript
for(var p in arr) {
    // 循环体
}
```

### 数组方法
#### join() 方法
Array.join()将数组中所有元素都转化为字符串并连接在一起，返回最后生成的字符串

可以指定一个可选的字符串在生成的字符串中来分隔数组的各个元素，如果不指定分隔符，默认使用逗号。

```javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr.join()); // 1,2,3,4,5
console.log(arr.join('-')); // 1-2-3-4-5
var arr1 = new Array(20);
console.log(arr1.join('')); // -------------------
```

Array.join()方法是String.split()方法的逆向操作，String.split()方法是将字符串分隔成若干块来创建一个数组

#### reverse() 方法
Array.reverse() 方法将数组中的元素颠倒顺序，返回逆序的数组。
```javascript
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.reverse();
console.log(arr); // [ 5, 4, 3, 2, 1 ]
console.log(arr1); // [ 5, 4, 3, 2, 1 ]
```

#### sort() 方法
Array.sort() 方法将数组中的元素排序并返回排序后的数组。当不带参数调用sort()时，数组元素以字母表顺序排序。

如果数组中包含undefined元素，它们会被排到数组的尾部

为了按照其他方式而非字母表顺序进行数组排序，必须给sort() 传递一个比较函数，该函数决定了它的两个参数在排好序的数组中的先后顺序，假设第一个参数应该在后，函数应该返回一个大于0的数值

按照数值大小排序：
```javascript
var arr = [1111, 222, 33, 4];
arr.sort();
console.log(arr); // [ 1111, 222, 33, 4 ]
arr.sort(function(x, y) {
	return x - y;
});
console.log(arr); // [ 4, 33, 222, 1111 ]
arr.sort(function(x, y) {
	return y - x;
});
console.log(arr); // [ 1111, 222, 33, 4 ]
```
忽略大小写排序
```javascript
var arr = ['ant', 'Bug', 'cat', 'Dog'];
arr.sort();
console.log(arr); // [ 'Bug', 'Dog', 'ant', 'cat' ]
arr.sort(function(s, t){
	var s1 = s.toLowerCase();
	var t1 = t.toLowerCase();
	if(s1 < t1) return -1;
	if(s1 > t1) return 1;
	return 0;
});
console.log(arr); // [ 'ant', 'Bug', 'cat', 'Dog' ]
```

#### concat() 方法
Array.concat() 方法创建并返回一个新数组，它的元素包括调用concat()的原始数组的元素和concat()的没个参数。如果这些参数中的任何一个自身是数组，则连接的是数组的元素，而非数组本身。

*concat()不会递归遍历数组的数组, 也不会修改修用的数组*
```javascript
var arr = [1, 2, 3];
var arr1 = arr.concat(4, 5);
var arr2 = arr.concat([4, 5]);
var arr3 = arr.concat([4, 5], [6, 7]);
var arr4 = arr.concat(4, [5, [6, 7]]);

console.log(arr);  // [ 1, 2, 3 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ]
console.log(arr2); // [ 1, 2, 3, 4, 5 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr4); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
```

#### slice() 方法
Array.slice()方法返回指定数组的一个片段或子数组。两个参数分别表示数组的开始和结束位置，slice()不会修改调用的数组
```javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3)); // [ 1, 2, 3 ]
console.log(arr.slice(3)); // [ 4, 5 ]
console.log(arr.slice(1, -1)); // [ 2, 3, 4 ]
console.log(arr.slice(-3, -2)); // [ 3 ]
```

#### splice() 方法
Array.splice() 方法是数组中插入或删除元素的通用方法。

* Array.splice()会修改调用的数组
* Array.splice()第一个参数指定了删除或修改的起始索引位置
* Array.splice()第二个参数指定删除的元素个数，如没有指定，则从起始点到数组结尾所有元素都删除
* Array.splice()返回删除掉的元素组成的数组

```javascript
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.splice(7)); // [ 7, 8, 9 ]
console.log(arr); // [ 0, 1, 2, 3, 4, 5, 6 ]
console.log(arr.splice(2, 2)); // [ 2, 3 ]
console.log(arr); // [ 0, 1, 4, 5, 6 ]
console.log(arr.splice(5)); // []
console.log(arr); // [ 0, 1, 4, 5, 6 ]
```

* Array.splice()中紧随前两个参数后的人一个个数的参数，指定了需要插入到数组中的元素，从起始位置开始插入

```javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2, 0, 'a', 'b')); // []
console.log(arr); // [ 1, 2, 'a', 'b', 3, 4, 5 ]
console.log(arr.splice(2, 2, [1, 2,], 3)); // [ 'a', 'b' ]
console.log(arr); // [ 1, 2, [ 1, 2 ], 3, 3, 4, 5 ]
```

#### push() 和 pop() 方法
* push() 和pop() 方法允许将数组当做栈来用
* push() 方法在数组的末尾添加一个或多个元素，并返回新数组的长度
* pop() 方法删除数组的最后一个元素，减小数组的长度，并返回删除的元素的值
* push() 和pop()方法都是修改原始数组，而非生成新数组

```javascript
var stack = [];
console.log(stack.push(1, 2)); // 2
console.log(stack); // [ 1, 2 ]
console.log(stack.pop()); // 2
console.log(stack); // [ 1 ]
console.log(stack.push(3)); // 2
console.log(stack); // [ 1, 3 ]
console.log(stack.pop()); // 3
console.log(stack); // [ 1 ]
console.log(stack.push([4, 5])); // 2
console.log(stack); // [ 1, [ 4, 5 ] ]
console.log(stack.pop()); // [ 4, 5 ]
console.log(stack); // [ 1 ]
console.log(stack.pop()); // 1
console.log(stack); // []
```

#### shift() 和 unshift() 方法
* unshift() 方法在数组的头部添加一个或多个元素，并将已存在的元素移动到更高索引的位置，返回数组的长度
* shift() 方法将数组的第一个元素删除掉，将其他元素的索引下移一个位置，返回删除掉元素的值

```javascript
var arr = [];
console.log(arr.unshift(1)); // 1
console.log(arr); // [ 1 ]
console.log(arr.unshift(22)); // 2
console.log(arr); // [ 22, 1 ]
console.log(arr.shift()); // 22
console.log(arr); // [ 1 ]
console.log(arr.unshift(3, [4, 5])); // 3
console.log(arr); // [ 3, [ 4, 5 ], 1 ]
console.log(arr.shift()); // 3
console.log(arr); // [ [ 4, 5 ], 1 ]
console.log(arr.shift()); // [ 4, 5 ]
console.log(arr); // [ 1 ]
console.log(arr.shift()); // 1
console.log(arr); // []
```

#### forEach() 方法
forEach()方法用于遍历整个数组，接受一个函数，forEach用三个参数来调用这个函数：数组元素、元素的索引、数组本身。

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function(val, index, a){
    if(index === 0) {
        console.log('a === arr : ' + (a === arr));
    }
    console.log('index : ' + index + '  value : ' + val );
});

/** 输出结果
a === arr : true
index : 0  value : 1
index : 1  value : 2
index : 2  value : 3
index : 3  value : 4
index : 4  value : 5
index : 5  value : 6
index : 6  value : 7
index : 7  value : 8
index : 8  value : 9
*/
```

#### map() 方法
map() 方法将调用数组的每个函数传递给指定的函数，并返回一个数组，包含该函数的返回值。

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr1 = arr.map(function(val){
    return val * val;
});

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr1); // [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
```

* 传递给map方法的函数应该有返回值
* map() 方法不会改变调用数组，而是返回一个新数组
* 如果是稀疏数组，那么返回的也是同样长度的数组，同样的长度，同样的缺失元素

#### filter() 方法
filter() 方法返回的数组元素是调用的数组的一个子集。如果调用的函数返回true或能转换成true的值，那么判定为这个数组的成员。

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = arr.filter(function(val){
    return val % 2 == 0;
});

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr2); // [ 2, 4, 6, 8 ]
```

* filter() 会跳过稀疏数组中的缺失元素，返回的数组总是稠密的

```javascript
// 压缩稀疏数组的缺失元素
var dense = sparse.filter(function(){return true;});

// 压缩缺失，且删除undefined和null元素
a = a.filter(function(x){return x !== null && x !== undefined;});
```

#### every() 和 some() 方法
every() 和 some() 方法是数组的逻辑判定：它们将数组元素应用指定的函数进行判定，返回true或false。

* 一旦every() 和some()确定返回值，就停止遍历
* every()在函数第一次返回false 就返回false
* some() 在函数第一次返回true 就返回true
* 空数组调用时，every() 返回true， some()放回false

```javascript
var arr = [];
console.log(arr.every(function(){return true;})); // true
console.log(arr.some(function(){return true;})); // false
```