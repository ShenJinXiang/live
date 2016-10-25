# JavaScript Client

tags: javascript
---

## Web浏览器中的JavaScript
### 客户端JavaScript
Window对象是所有客户端所有JavaScript的切入点。表示一个浏览器的窗口或窗体，可以用window引用Window对象。

```javascript
// 载入新的url地址
window.location = "http://www.baidu.com";
```

```javascript
// 等待2秒，出发弹出hello
setTimeout(function(){
    alert('hello world!');
}, 2000);
```

Window对象也是全局对象，它的所有属性和方法是全局变量和全局函数。
Window的document属性，引用了Document对象。

```javascript
// 查找id = 'timestamp'的元素
var timestamp = document.getElementById("timestamp");

// 如果元素为空，插入当前日期和时间
if(timestamp.firstChild == null) {
    timestamp.appendChild(document.createTextNode(new Date().toString()));
}
```
每个Element对象都有style和className属性，可以修改元素的css样式或修改应用到元素上的类名。
事件处理程序，异步

JavaScript程序可以通过Document对象和它包含的Element对象遍历和管理文档内容。可以通过操作css和类，修改文档内容的呈现。并且可以注册一定的事件程序来定义文档元素的行为。

### 在HTML中嵌入JavaScript
四种方法：

* 内嵌，放置在<script>和</script>标签对之间
* 放置在由<script> 标签的src属性指定的外部文件中
* 放置在HTML事件处理程序中，该程序由onclick、onmousemove之类的HTML属性指定
* 放置在url中，使用特殊的“javascript:”协议

## Window对象
### 计时器
setTimeout() 和 setInterval()

* setTimeout() 方法实现一个函数在指定的毫秒数后运行
* setInterval() 方法实现一个函数在指定的毫秒数间隔重复调用

### 浏览器定位和导航
Window对象的location属性引用了Location对象，表示窗口中显示的当前文档的url地址。
```javascript
window.location === document.location; // true
```
Location对象的href属性是一个字符串，表示了url的完整文本。

#### 载入新文档
* assign() 方法可以使浏览器载入并显示指定url中的文档。
* replace() 方法也可以载入新文档，在载入新文档之前将当前文档删除，不可以通过“后退”按钮回退
* reload() 方法让浏览器重新载入当前文档，即刷新

### 浏览历史
Windiw对象的history属性引用的是窗口的History对象，表示浏览器的浏览历史用文档或文档状态的列表的形式。History对象的length属性表示浏览器历史列表中的数量

* back() 方法，表示“后退”
* forward() 方法，表示“前进”
* go() 方法接受一个整数参数，可以向前或向后跳转
* 如果窗口包含子窗口(iframe元素)，子窗口的浏览历史也会按时间顺序穿插在主窗口的历史中，如果后退，则会使子窗口回跳，主窗口不变

### 浏览器和屏幕信息
#### Navigator对象
Window对象的navigator属性引用Navigator对象，包含浏览器厂商和版本信息。

* appName属性 web浏览器的全称
* appVersion 浏览器版本信息
* userAgent Http头部发送的信息 user-agent信息
* platform 操作系统信息字符串
* onLine属性表示浏览器是否链接到网络
* geolocation属性用于确定用户地理位置信息的接口
* javaEnabled 方法 当浏览器可以运行java小程序时返回true
* cookieEnable 方法 如果浏览器可以保存永久的cookie时，返回true

#### Screen对象
Window对象的screen属性引用了Screen对象。提供有关窗口显示的大小和可用的颜色数量的信息

* width和height属性，指定以像素为单位的窗口大小
* availWidth和availHeight指定实际可用的显示大小
* colorDepth指定的是显示的BPP(bits-per-pixel)值，典型的值有16、24、32

### 对话框
Window对象提供了3个方法来向用户显示简单的对话框

* alert() 向用户显示一条消息并等待用户关闭对话框
* confirm() 显示一条消息，要求用户点击“确定”或“取消”按钮，并返回一个布尔值
* prompt() 显示一条消息，等待用户输入字符串，并返回那个字符串。

### 错误处理
Window对象的onerror属性是一个事件处理程序，当未捕获的异常传播到调用栈上时就会调用它，并把错误信息输出到浏览器的JavaScript控制台上。

### 多窗口和窗体
一个Web浏览器窗口可能在桌面上包含多个标签页。每个标签页都是独立“浏览器上下文”(browsing context)，每个上下文都有独立的Window对象，而且相互之间互不干扰

#### 打开和关闭窗口
Window对象的open()方法可以打开一个新的浏览器窗口

* 第一个参数：新窗口要显示的文档的URL，如果忽略，则是空页面
* 第二个参数：新打开窗口的名称。如果已存在，会直接使用已存在的窗口；如果忽略此参数，会使用指定的名字"_blank"打开一个新的、未命名的窗口
* 第三个参数：一个以逗号分隔的列表，包含大小和各种属性，用以表明新窗口是如何打开的，如果忽略，新窗口会用一个默认的大小，带有菜单栏、状态栏、工具栏等
* 第四个参数：只在第二个参数命名的是一个存在的窗口时才有用，是一个布尔值，表明第一个参数指定的url是应用替换掉窗口浏览历史的当前条蜜，还是创建新条目
* 返回值：代表新创建的窗口的Window对象

close() 关闭一个窗口，如果已创建了Window对象的w，可以使用w.close() 关闭。

## 脚本化文档
每个Window对象又个document属性引用Document对象
### 选取文档元素
* 用指定的id属性
* 用指定的name属性
* 用指定的标签名字
* 用指定的css类
* 匹配指定的css选择器

#### 通过id选取元素
任何html元素都可以由一个id属性，在文档中该值必须唯一。
> document.getElementById("id");

```javascript
/**
 * 接收任意多个字符串参数，返回id和元素映射对象
 */
function getElements(/* ids...*/) {
    var elements = {};
    for(var i = 0; i < arguments.length; i++) {
        var id = arguments[i];
        var elt = document.getElementId(id);
        elements[id] = elt;
    }
    return elements;
}
```

#### 通过名字选取元素
> document.getELementsByName("name");

* 定义在HTMLDocument类中，所以只可以用在html中，不能用在xml文档中。
* 返回NodeList对象，类似包含若干Element的只读数组。

#### 通过标签名选取元素
> document.getELementsByTagName("tagname");

返回NodeList对象
参数为“*”选渠道代表文档所有元素的NodeList对象

#### 通过css类选取元素
> document.getElementsByClassName("className")；

#### 通过css选择器选取元素
> document.querySelectorAll();

接受包含一个css选择器的字符串参数，返回表示所有元素的NodeList对象

> document.querySelector()；

只返回第一个匹配的元素，没有匹配返回null

#### document.all[]
表示所有文档中的元素（除了Text节点），已被标准方法取代。废弃不用。

### 文档结构和遍历
#### 座位节点树的文档
Document对象、Element对象、文档中表示文本的Text对象都是Node对象。

* parentNode 属性 该节点的父节点，没有父节点的时候是null
* 吃了点Nodes 只读的类数组对象(NodeList对象)，该节点的子节点
* firstChild、lastChild 该节点的字节点的第一个和最后一个，没有子节点则为null
* nextSibling、previoursSibling 该节点兄弟节点中的前一个和下一个节点
* nodeType 节点的类型，9-Document节点， 1-Element节点， 3-Text节点， 8-Comment节点， 11-DocumentFragment节点
* nodeValue Text节点或Commont节点的文本内容
* nodeName 元素的标签名，大写形式

### 属性
HTML属性由一个标签和一组称为属性的名-值对组成。
#### HTML属性作为Element的属性
表示HTML文档元素的HTMLElement对象定义了读写属性，映射了元素的HTML属性

* HTML属性不区分大小写，但是JavaScript属性名区分大小写，一般采用小写，不只一个单词时，除第一个单词以外的单词首字母大写，如：defaultChecked tabIndex
* 有些HTML属性在JavaScript中是保留字，一般规则是在属性名加前缀“html” 如 for 属性 写成htmlFor属性。class属性则写成className属性

### 创建、插入和删除节点
```javascript
// 从指定的url，异步加载和执行脚本
function loadasync(url) {
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.src = url;
    head.appendChild(s);
}
```

#### 创建节点
创建新的Element节点，可以使用Document对象的createElement()方法。给方法传递元素的标签名。
创建文本节点，可以使用document.createTextNode("文本内容");
复制已存在的节点，每个节点都有一个cloneNode()方法返回该节点的全新副本。传递参数true可以递归复制所有后代节点，传递false只执行前复制。

#### 插入节点
* appendChild() 在需要插入Element节点上调用，插入指定的节点使其成为那个节点的最后一个子节点
* insetBefore() 第一个参数是待插入的节点，第二个参数是已存在的节点，新节点插入该节点的前面，在父节点上调用。
* 如果调用appendChild() 或 insertBefore() 将已存在的文档中的一个节点再次插入，那个节点将自动从它当前的位置删除并在新的位置重新插入，即只改变了节点的顺序

#### 删除和替换节点
removeChild() 方法
父节点上调用，将要删除的子节点作为方法的参数
```javascript
// 删除n节点：
n.parentNode.removeChild(n);
```

replaceChild()
删除一个子节点，并用新节点取而代之。父节点上调用。第一个参数是新节点，第二个是需要代替的结果

### 文档和元素的几何形状和滚动
#### 文档坐标和视口坐标
 元素的位置是以像素来度量的，向右代表x坐标增加，向下代表y坐标增加。
 
文档坐标: 文档的左上角位置为坐标原点
视口坐标: 浏览器可视窗口的左上角为坐标原点

* 如果文档比视口要小，还未出现滚动条，则文档的左上角就是视口的左上角，即文档和视口的坐标系统是同一个
* 坐标之间相互转换需加上或减去滚动的偏移量(scroll offset)
* 文档坐标比视口坐标更加基础，并且在用户滚动时不会发生变化

获取浏览器窗口滚动条的位置：
Window对象的pageXOffset和pageYOffset属性，IE可以通过scrollLeft和scrollTop属性来获取
```javascript
// 查询窗口滚动条位置
function getScrollOffsets(w) {
    w = w || window;
    if(w.pageXOffset != null) {
        return {
            x: w.pageXOffset,
            y: w.pageYOffset
        };
    }
    var d = w.document;
    if(document.compatMode == "CSS1Compat") {
        return {
            x: d.documentElement.scrollLeft,
            y: d.documentElement.scrollTop
        };
    }
    
    return {
        x: d.body.scrollLeft,
        y: d.body.scrollTop
    };
}
```