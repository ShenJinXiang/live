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

