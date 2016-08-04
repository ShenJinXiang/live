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

