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

### 创建包
Node.js 的包是一个目录，其中包含一个 JSON 格式的包说明文件 package.json。严格符合 CommonJS 规范的包应该具备以下特征：

* package.json 必须在包的顶层目录下
* 二进制文件应该在 bin 目录下
* JavaScript 代码应该在 lib 目录下
* 单元测试应该在 test 目录下

#### 作为文件夹的模块
模块与文件是一一对应的。文件不仅可以是 JavaScript 代码或二进制代码，还可以是一个文件夹。最简单的包，就是一个作为文件夹的模块。下面我们来看一个例子，建立一个叫做 somepackage 的文件夹，在其中创建 index.js，内容如下：

```javascript
//somepackage/index.js
exports.hello = function() {
    console.log('Hello.');
};
```

然后在 somepackage 之外建立 getpackage.js，内容如下：
```javascript
//getpackage.js
var somePackage = require('./somepackage');
somePackage.hello();
```
运行 node getpackage.js，控制台将输出结果 Hello.
我们使用这种方法可以把文件夹封装为一个模块，即所谓的包。包通常是一些模块的集
合，在模块的基础上提供了更高层的抽象，相当于提供了一些固定接口的函数库。通过定制
package.json，我们可以创建更复杂、更完善、更符合规范的包用于发布.

#### package.json
在前面例子中的 somepackage 文件夹下，我们创建一个叫做 package.json 的文件，内容如下所示：
```json
{
	"main" : "./lib/interface.js"
}
```
然后将 index.js 重命名为 interface.js 并放入 lib 子文件夹下。以同样的方式再次调用这个包，依然可以正常使用。
Node.js 在调用某个包时，会首先检查包中 package.json 文件的 main 字段，将其作为包的接口模块，如果 package.json 或 main 字段不存在，会尝试寻找 index.js 或 index.node 作为包的接口。
package.json 是 CommonJS 规定的用来描述包的文件，完全符合规范的 package.json 文件应该含有以下字段。

* name：包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
* description：包的简要说明
* version：符合语义化版本识别①规范的版本字符串
* keywords：关键字数组，通常用于搜索
* maintainers：维护者数组，每个元素要包含 name、 email （可选）、 web （可选）字段
* contributors：贡献者数组，格式与maintainers相同。包的作者应该是贡献者数组的第一个元素
* bugs：提交bug的地址，可以是网址或者电子邮件地址
* licenses：许可证数组，每个元素要包含 type （许可证的名称）和 url （链接到许可证文本的地址）字段
* repositories：仓库托管地址数组，每个元素要包含 type（仓库的类型，如 git ）、url （仓库的地址）和 path （相对于仓库的路径，可选）字段

### Node.js 包管理器
Node.js包管理器，即npm是 Node.js 官方提供的包管理工具①，它已经成了 Node.js 包的标准发布平台，用于 Node.js 包的发布、传播、依赖控制。 npm 提供了命令行工具，使你可以方便地下载、安装、升级、删除包，也可以让你作为开发者发布并维护包。

#### 获取一个包
使用 npm 安装包的命令格式为：
> npm [install/i] [package_name]

例如你要安装 express，可以在命令行运行：
> $ npm install express

#### 本地模式和全局模式
npm在默认情况下会从http://npmjs.org搜索或下载包，将包安装到当前目录的node_modules子目录下
在使用 npm 安装包的时候，有两种模式：本地模式和全局模式。默认情况下我们使用 npminstall命令就是采用本地模式，即把包安装到当前目录的 node_modules 子目录下。Node.js的 require 在加载模块时会尝试搜寻 node_modules 子目录，因此使用 npm 本地模式安装
的包可以直接被引用。
npm 还有另一种不同的安装模式被成为全局模式，使用方法为：
> npm [install/i] -g [package_name]

与本地模式的不同之处就在于多了一个参数 -g。我们在 介绍 supervisor那个小节中使用
了 npm install -g supervisor 命令，就是以全局模式安装 supervisor。

## Node.js核心模块
### 全局对象
JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global对象的属性。

#### 全局对象与全局变量
global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条
件的变量是全局变量：
* 在最外层定义的变量
* 全局对象的属性
* 隐式定义的变量（未定义直接赋值的变量）

在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的，
而模块本身不是最外层上下文

#### process
process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js 进程状态的对象，提供了一个与操作系统的简单接口。

* process.argv是命令行参数数组，第一个元素是 node， 第二个元素是脚本文件名，从第三个元素开始每个元素是一个运行参数。
* process.stdout是标准输出流，通常我们使用的 console.log() 向标准输出打印字符，而 process.stdout.write() 函数提供了更底层的接口。
* process.stdin是标准输入流，初始时它是被暂停的，要想从标准输入读取数据，你必须恢复流，并手动编写流的事件响应函数
* process.nextTick(callback)的功能是为事件循环设置一项任务， Node.js 会在下次事件循环调响应时调用 callback

#### console
console 用于提供控制台标准输出，console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符

* console.log()：向标准输出流打印字符并以换行符结束。 console.log 接受若干个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则以类似于 C 语言 printf() 命令的格式输出。第一个参数是一个字符串，如果没有参数，只打印一个换行
* console.error()：与 console.log() 用法相同，只是向标准错误流输出
* console.trace()：向标准错误流输出当前的调用栈

### 常用工具 util
util 是一个 Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能
过于精简的不足

#### util.inherits
util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数

#### util.inspect
util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象

* showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息
* depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象
* 如果color 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮的效果。

特别要指出的是， util.inspect 并不会简单地直接把对象转换为字符串，即使该对
象定义了 toString 方法也不会调用

### 事件驱动 events
#### 事件发射器
events 模块只提供了一个对象： events.EventEmitter。 EventEmitter 的核心就是事件发射与事件监听器功能的封装。EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件， EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递

```javascript
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'hehe', 'haha');
```

* EventEmitter.on(event, listener) 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数 listener
* EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传递若干可选参数到事件监听器的参数表
* EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听器
* EventEmitter.removeListener(event, listener) 移除指定事件的某个监听器， listener 必须是该事件已经注册过的监听器
* EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器，如果指定 event，则移除指定事件的所有监听器

#### error 事件
EventEmitter 定义了一个特殊的事件 error，它包含了“错误”的语义，我们在遇到
异常的时候通常会发射 error 事件。当 error 被发射时， EventEmitter 规定如果没有响
应的监听器， Node.js 会把它当作异常，退出程序并打印调用栈

### 文件系统 fs
fs 模块是文件操作的封装，它提供了文件的读取、写入、更名、删除、遍历目录、链接等 POSIX 文件系统操作。与其他模块不同的是， fs 模块中所有的操作都提供了异步的和同步的两个版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的fs.readFileSync()。
#### fs.readFile
fs.readFile(filename,[encoding],[callback(err,data)])是最简单的读取文件的函数。它接受一个必选参数 filename，表示要读取的文件名。第二个参数 encoding是可选的，表示文件的字符编码。 callback 是回调函数，用于接收文件的内容。如果不指定 encoding，则 callback 就是第二个参数。回调函数提供两个参数 err 和 data， err 表示有没有错误发生， data 是文件内容。如果指定了 encoding， data 是一个解析后的字符串，否则 data 将会是以 Buffer 形式表示的二进制数据

Node.js 的异步编程接口习惯是以函数的最后一个参数为回调函数，通常一个函数只有一个回调函数。回调函数是实际参数中第一个是 err，其余的参数是其他返回的内容。如果没有发生错误， err 的值会是 null 或undefined。如果有错误发生， err 通常是 Error 对象的实例

#### fs.readFileSync
fs.readFileSync(filename, [encoding])是 fs.readFile 同步的版本。它接受的参数和 fs.readFile 相同，而读取到的文件内容会以函数返回值的形式返回。如果有错误发生， fs 将会抛出异常，你需要使用 try 和 catch 捕捉并处理异常。

#### fs.open
fs.open(path, flags, [mode], [callback(err, fd)])是 POSIX open 函数的封装，与 C 语言标准库中的 fopen 函数类似。它接受两个必选参数， path 为文件的路径，flags 可以是以下值

* r ：以读取模式打开文件。
* r+ ：以读写模式打开文件。
* w ：以写入模式打开文件，如果文件不存在则创建。
* w+ ：以读写模式打开文件，如果文件不存在则创建。
* a ：以追加模式打开文件，如果文件不存在则创建。
* a+ ：以读取追加模式打开文件，如果文件不存在则创建。

mode 参数用于创建文件时给文件指定权限，默认是 0666①。回调函数将会传递一个文件描述符 fd