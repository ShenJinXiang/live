# nodejs

tags:nodejs

---

## 模块和包

### 创建模块
在 Node.js 中，创建一个模块非常简单，因为一个文件就是一个模块，我们要关注的问题仅仅在于如何在其他文件中获取这个模块。 Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口， require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象

```javascript
//module.js
var name;
exports.setName = function(thyName) {
  name = thyName;
};
exports.sayHello = function() {
console.log('Hello ' + name);
};
```
在同一目录下创建 getmodule.js，内容是
```javascript
//getmodule.js
var myModule = require('./module');
myModule.setName('BYVoid');
myModule.sayHello();
```
运行node getmodule.js，结果是：
```
Hello BYVoid
```

在以上示例中， module.js 通过 exports 对象把 setName 和 sayHello 作为模块的访问接口，在 getmodule.js 中通过 require('./module') 加载这个模块，然后就可以直接访问 module.js 中 exports 对象的成员函数了

### 单次加载
面这个例子有点类似于创建一个对象，但实际上和对象又有本质的区别，因为require 不会重复加载模块，也就是说无论调用多少次 require， 获得的模块都是同一个

### 覆盖 exports
有时候我们只是想把一个对象封装到模块中，例如：
```javascript
//singleobject.js
function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};
exports.Hello = Hello;
```
此时我们在其他文件中需要通过 require('./singleobject').Hello 来获取Hello 对象，这略显冗余，可以用下面方法稍微简化：

```javascript
//hello.js
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;
```

这样就可以直接获得这个对象了

```javascript
//gethello.js
var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
```

注意，模块接口的唯一变化是使用 module.exports = Hello 代替了 exports.Hello=Hello。在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的exports

事实上， exports 本身仅仅是一个普通的空对象，即 {}，它专门用来声明接口，本质上是通过它为模块闭包①的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，所以可以用其他东西来代替，譬如我们上面例子中的 Hello 对象。

## 创建包
Node.js 的包是一个目录，其中包含一个 JSON 格式的包说明文件 package.json。严格符合 CommonJS 规范的包应该具备以下特征：

* package.json 必须在包的顶层目录下
* 二进制文件应该在 bin 目录下
* JavaScript 代码应该在 lib 目录下
* 单元测试应该在 test 目录下

