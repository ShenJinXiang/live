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





