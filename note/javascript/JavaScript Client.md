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






