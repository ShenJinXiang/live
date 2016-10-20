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