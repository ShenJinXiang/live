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

* 内嵌，放置在&lt;script&gt;和&lt;/script&gt;标签对之间
* 放置在&lt;script&gt; 标签的src属性指定的外部文件中
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
```javascript
// 查询窗口的视口尺寸
function getViewportSize(w) {
    w = w || window;
    if(w.innerWidth != null) {
        return {
            w: w.innerWidth,
            h: w.innerHeight
        };
    }
    var d = w.document;
    if(document.compatMode == 'CSS1Compat') {
        return {
            w: d.documentElement.clientWidth,
            h: d.documentElement.clientHeight
        };
    }
    return {
        w: d.body.clientWidth,
        h: d.body.clientHeight
    };
}
```

#### 查询元素的几何尺寸
> getBoundingClientRect()

* 不需要参数，返回一个有left、right、top、bottom属性的对象，left和top属性表示元素的左上角的x和y的坐标，right和bottom属性表示元素的右下角的x和y坐标
* 返回的是视口坐标中的位置

#### 判断元素在某店
> document.elementFromPoint()

* 参数x和y坐标（视口坐标）
* 返回此位置的元素(最里面和最上面的)

#### 滚动
> window.scrollTo()

接受一个点的x和y坐标(文档坐标)，作为滚动条的偏移量设置。窗口移动到指定的店出现在视口的左上角。滚动到指定位置

> window.scrollBy()

在当前滚动条的偏移量上增加，可用于持续滚动

> scrollIntoView()

html元素对象调用，可使其在屏幕上可见，也可以用getBoundingClientRect()方法获取元素的位置，转换为文档坐标，然后用scrollTo()实现。
与window.location.hash为命名为锚点(<a name=''>元素)的名字后浏览器产生的行为类似

#### 关于元素尺寸、位置和溢出的信息
元素尺寸：任何HTML元素的只读属性offsetWidth和offsetHeight以css像素返回它的屏幕尺寸。返回的尺寸包含元素的边框和内边距，不包含外边距

### HTML表单

|HTML元素|类型属性|事件处理程序|描述和事件|
|:--|:--:|:--:|:--|
|&lt;input type='button'&gt; 或  &lt;button type='button'&gt;|"button"|onclick|按钮|
|&lt;input type='checkbox'&gt;|"checkbox"|onchange|复选按钮|
|&lt;input type='file'&gt;|"file"|onchange|载入Web服务器的文件的文件名或输入域；它的value属性是只读的|
|&lt;input type='hidden'&gt;|"hidden"|none|数据由表单提交，但对用户不可见|
|&lt;option&gt;|none|none|Select对象中的单个选项；时间处理程序在select对象上，而非单独的Option对象上|
|&lt;input type='password'&gt;|"password"|onchange|密码输入框，输入的字符不可见|
|&lt;input type='radio'&gt;|"radio"|onchange|单选按钮，同时只能选定一个|
|&lt;input type='reset'&gt;或  &lt;button type='reset'&gt;|"reset"|onclick|重置表单的按钮|
|&lt;select&gt;|"select-one"|onchange|选项只能单选的列表或下拉菜单|
|&lt;select multiple&gt;|"select-multiple"|onchange|选项可以多选的列表|
|&lt;input type='submit'&gt;或  &lt;button type='submit'&gt;|"submit"|onclick|表单提交按钮|
|&lt;input type='text'&gt;|"text"|onchange|单行文本输入域；type属性缺少或无法识别时默认的&lt;input&gt;元素|
|&lt;textarea&gt;|"textarea"|onchange|多行文本输入域|

* JavaScript的From对象支持两个方法：submit()和reset()用来提交和重置

#### Document的属性
* cookie 允许JavaScript程序读写HTTP cookie的特殊属性
* domain 该属性允许当Web页面之间交互时，相同域名下互相信任的Web服务器之间写作放宽同源策略安全限制
* lastModified 包含文档修改时间的字符串
* location 与Window对象的location属性引用同一个Location对象
* referrer 如果有表示浏览器导航到当前链接的上一个文档
* title 文档的<title>和</title>标签之间的内容
* URL 文档的url 只读字符串。

#### document.write() 方法
讲字符串参数链接起来，然后将结果字符串插入到文档中调用它的脚本的位置，当脚本执行介绍，浏览器解析生成的输出并显示它。

## 脚本化CSS
### CSS概览
* 属性名 冒号 值
* 内联样式关联css 在HTML元素中设置style属性值
* 在style标签中写css样式
* head中使用link标签引入外部css文件 <link rel='stylesheet' href='' type='text/css'>

#### 复合属性
例子：
font-family font-size font-weight
#### 非标准属性

|浏览器|前缀|
|:--|:--:|
|Firefox|-moz-|
|Chrome|-webkit-|
|IE|-ms-|

### 重要的CSS属性

|属性|描述|
|:--|:--|
|position|指定元素的定位类型|
|top、left|指定元素上、左边缘的位置|
|bottom、right|指定元素下、右边缘的位置|
|width、height|指定元素的尺寸|
|z-index|指定元素相对于其他层叠元素的“堆叠次序”，定义了元素定位的第三个维度|
|display|指定元素是否以及如何显示|
|visibility|指定元素是否可见|
|clip|定义元素的裁剪区域，只显示元素在区域内的部分|
|overflow|指定元素比分配的空间要大时的处理方式|
|margin、border、padding|指定元素的空白和边框|
|background|指定元素的背景颜色或图片|
|opacity|指定元素的不透明度，CSS3属性|

#### 用CSS定位元素
CSS的position属性指定了应用到元素上的定位类型

* static 默认属性。指定元素按照常规的文档内容流进行定位，不能使用top、left和类似其他属性定位
* absolute 指定元素是相对于它包含的元素进行定位，不是文档流的步伐，要不是相对于最近定位的祖先元素，要么是相对于文档本身
* fixed 指定元素相对于浏览器窗口进行定位。
* relative 按照常规文档流进行布局，定位相对于文档流中的位置调整。

一旦设置了position属性为除了static以外的值。就可以通过left、top、right、bottom属性指定元素位置。
如果元素使用绝对定位，它的top和left属性就相对于其position属性设置为除static值以外的祖先元素。如果没有定位过的祖先，则按照文档坐标进行度量，即相对于文档左上角的偏移量。

单位： 像素(px)、英寸(in)、厘米(cm)、点(pt)、字体行高(em)

**z-index**
* 定义了第三个维度，允许指定元素堆叠次序，按照从低到高的顺序回执。
* 非定位元素，z-index无效，默认z-index值为0

**CSS 文本阴影**
text-shadow属性在文本下产生阴影效果

#### 边框、外边距和内边距
元素的边框是一个围绕元素回执的矩形。
```css
border: solid black 1px; /* 1像素的黑色实线边框 */
border: 3px dotted red; /* 3像素的红色点线边框 */
```
可以单独的css属性指定边框的宽度、样式和颜色，也可以指定元素每条边的边框。

margin 指定边框外面 边框和相邻元素之间的空间
padding 指定边框内，边框和元素内容之间的空间

#### CSS盒模型和定位细节
* width和height只指定了元素内容区域的尺寸，不包含内边距、边框、外边距
* left和top指定了容器边框内层到定位元素外侧的距离

**边框盒模型和box-sizing属性**
标志css盒模型规定width和height样式属性给定内容区域的尺寸，并不包含内边距和边框，称为“内容盒模型”

box-sizing 属性默认值content-box 指标志盒模型,如果指定为box-sizing: border-box，那width和height属性讲包含边框盒内边距

#### 元素显示和可见性
两个css属性影响了元素的可见性：visibility、display

visibility
值为hidden时，元素不显示
值为visible时，元素显示

display 指定元素是否块状元素、内联元素、列表项等
none时，元素不显示

* visibility属性为hidden时元素不可见，但是文档布局中仍保留了它的空间
* display属性设置成none，在文档布局中不再分配空间。
* visibility和display对绝对和固定定位的元素是等价的，因为这些元素不是文档布局的一部分。
* 隐藏和显示定位元素时一般首选visibility属性

#### 颜色、透明度、半透明度
color属性指定文档元素包含的文本的颜色
background-color属性指定任何元素的背景颜色
background-image属性指定使用的图像
opacity属性设置透明度

* 如果没有为元素指定背景颜色或图像，它的背景通常透明。
* opacity的属性值是0-1之间的数字，1代表100%不透明（默认值），0代表100%透明

#### 部分可见：overflow和clip
overflow属性指定内容超出元素的大小时，如何显示

* visible 默认值，如果需要，内容可以溢出并绘制在元素边框的外面
* hidden 裁剪调和隐藏溢出的内容
* scroll 元素一直显示水平和垂直的滚动条，如果内容超出元素尺寸，允许用户通过滚动来查看额外的内容
* auto 滚动条只在内容超出元素尺寸时显示，而非一直显示

clip属性指定了该显示元素的哪部分，不管是否溢出。
> rect(top right bottom left)

### 脚本化内联样式
脚本化css最直接的方式是更改单独的元素的style属性
```javascript
e.style.fontSize = '24pt';
e.style.fontWeight = "bold";
e.style.color = "blur";
```

**CSS动画**
使用setTimeout()或setInterval()重复调用函数来修改元素的内联样式实线css动画。

### 查询计算出的样式
> getComputedStyle()

* 第一个参数是需要计算样式的元素
* 第二个参数通常是null或空字符串，也可以是css伪对象的字符串
* 返回值是CSSStyleDeclaration对象，代表了应用在指定的元素上的所有样式
* 计算样式的属性是只读的
* 计算样式的值是绝对值
* 不计算复合属性
* 计算样式的cssText属性未定义

### 脚本化CSS类
通过脚本修改HTML的css属性值，HTML元素可以有多个css类名，class属性保存了一个用空格隔开的类名列表。
HTML5为每个元素定义了classList属性，属性值是DOMTOkenList对象：一个只读的类数组对象，方法有：add() remove() 添加和清除一个类名。toggle()如果不存在类名就添加一个，否则删除。contains()方法检测class属性中是否包含一个指定的类名。
```javascript
function classList(e) {
    if(e.classList) {
        return e.classList;
    }
    return new CSSClassList(e);
}

function CSSClassList(e) {
    this.e = e;
}

CSSClassList.prototype.contains = function(c) {
    if(c.length === 0 || c.indexOf(" ") != -1) {
        throw new Error("Invalid class name: '" + c + "'");
    }
    var classes = this.e.className;
    if(!classes) {
        return false;
    }
    if(classes === c) {
        return true;
    }
    return classes.search("\\b" + c + "\\b") != -1;
};

CSSClassList.prototype.add = function(c) {
    if(this.contains(c)) return;
    var classes = this.e.className;
    if(classes && classes[classes.length - 1] != ' ') {
        c = " " + c;
    }
    this.e.className += c;
};

CSSClassList.prototype.remove = function(c){
    if(c.length === 0 || c.indexOf(" ") != -1){
        throw new Error("Invalid class name: '" + c + "'");
    }
    var pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
    this.e.className = this.e.className.replace(pattern, "");
};

CSSClassList.prototype.toggle = function(c){
    if(this.contains(c)) {
        this.remove(c);
        return false;
    } else {
        this.add(c);
        return true;
    }
};

CSSClassList.prototype.toString = function() {
    return this.e.className;
};

CSSClassList.prototype.toArray = function(){
    return this.e.className.match(/\b\w+\b/g) || [];
};
```

### 脚本化样式表
脚本化样式表，不经常用。
元素对象&lt;style&gt;和&lt;link&gt;元素，如果有id属性，可以用getElementById("") 获取

> document.styleSheets

获取只读的类数组对象，包含了页面的CSSStyleSheet对象，
#### 开启和关闭样式表
CSSStyleSheet对象的disabled属性，设置属性值为true，浏览器就忽略此样式表
```javascript
function disableStylesheet(ss) {
    if(typeof ss === 'number') {
        document.styleSheets[ss].disabled = true;
    } else {
        var sheets = document.querySelectorAll(ss);
        for(var i = 0; i < sheets.length; i++) {
            sheets[i].disabled = true;
        }
    }
}
```

#### 查询、插入与删除样式表规则
document.styleSheets[]数组的元素是CSSStyleSheet对象，CSSStyleSheet对象有一个cssRules[]数组，它包含样式表的所有规则：

> var firstRule = document.styleSheets[0].cssRules[0];

* IE使用不同的属性名rules代替cssRules
* cssRules[]或rules[]数组的元素为CSSRule对象
* cssRules的selectText属性是规则的css选择器
* 使用CSSStyleDeclaration对象的cssText属性来活的规则的文本表示形式

* insertRule() 添加规则
* deleteRule() 删除规则

> document.styleSheets[0].insertRule("H1 {text-weight: bold;}", 0);

#### 创建新样式表
可以使用标注呢dom技术：创建新的style元素，将其插入文档头部，然后用innerHTML属性来设置样式表内容。
在IE8以及更早版本中可以通过document.createStyleSheet()来创建CSSStyleSheet对象
```javascript
function addStyle(styles) {
    var styleElt, styleSheet;
    if(document.createStyleSheet) {
        styleSheet = document.createStyleSheet();
    } else {
        var haed = document.getElementsByTagName("head")[0];
        styleElt = document.createElement("style");
        head.appendChild(styleElt);
        styleSheet = document.styleSheets[document.styleSheets.length - 1]
    }
    
    if(typeof styles === 'string') {
        if(styleElt) {
            styleElt.innerHTML = styles;
        } else {
            styleSheet.cssText = styles;
        }
    } else {
        var i = 0;
        for(selector in styles) {
            if(styleSheet.insertRule) {
                var rule = selector + " {" + styles[selector] + "}";
                styleSheet.insertRule(rule, i++);
            } else {
                styleSheet.addRule(selector, styles[selector], i++);
            }
        }
    }
    
}
```

## 事件处理
事件就是web浏览器通知应用程序发生了什么事，事件不是JavaScript对象。
* 事件类型：(event type) 是一个用来说明发生了什么类型事件的字符串。有时会称为事件名字 event name
* 事件目标：(event target) 是发生的事件或与之相关的对象。讲事件时，必须指名事件的类型和目标
* 事件处理程序 (event handler) 或 事件监听程序 (event listener) 是处理或响应事件的函数。当特定目标上发生特定类型的事件时，浏览器会调用对应的处理程序
* 事件对象：(event object) 是与特定事件相关且包含有关该事件详细信息的对象，事件对象作为参数传递给事件处理程序函数
* 事件传播：(event propagation)是浏览器决定哪个对象触发其它事件处理程序的过程。对于某个对象的特定事件，是不能传播的

### 事件类型
#### 传统事件类型
**表单事件**
* 表单事件是所有事件类型中最稳定且得到良好支持的事件
* 当提交和重置表单时，form元素会分别出发submit和reset事件
* 当用户和类按钮表单元素被点击时，会出发click事件
* 当输入文字或选择复选框还改变表单元素的状态时，会出发change事件
* 得到或失去焦点时分别触发focus和blur事件
* focus和blur事件不会冒泡
* 无论用户何时输入文字，除了IE以外的浏览器都会出发input事件，每次文字输入都会触发

**Window事件**
* load事件：当文档和所有外部资源完成加载并显示给用户的时候触发。
* unload事件：当用户离开当前文档转向其它文档时触发，可以保存用户状态，但不能取消用户转向其它地方
* beforeunload事件：与unload事件类似，但提供询问用户是否确定离开当前页面的机会，如果beforeunload程序返回一个字符串，那么在新页面加载之前，字符串会显示在用户界面的对话框中，这样用户就有机会点击取消继续留在当前页面
* img 元素也可以注册load事件和error事件，当图片完成加载或发生阻止加载的错误时就触发。
* window也可以注册focus和blur事件，当浏览器获得和失去焦点时触发
* resize和scroll事件，当用户调整浏览器大小和滚动时触发。

**鼠标事件**
* 当用户在文档上移动或单击鼠标时都会产生鼠标事件。这些事件在鼠标指针所对应的最里面的元素上触发，会冒泡直到文档最顶层
* clientX和clientY属性指定了鼠标在窗口坐标中的位置，button和which属性制定了按下的鼠标键是哪个
* 当键盘辅助间按下时，对应的属性altkey、ctrlKey、metaKey和shiftKey会设置为true
* 对于click时间，detail属性指定了是单击、双击或三击
* 用户每次移动或拖动鼠标时，会触发mousemove时间，此时间非常频繁，所以对应的时间处理程序一定不能触发计算密集型任务
* 用户按下或释放鼠标按键时，会触发mousedown和mouseup时间
* 用户滚动鼠标滚轮时，浏览器触发mousewheel时间（Firefox中是DOMMouseScroll事件），事件对象属性指定滚轮转动的大小和方向

**键盘事件**
* 用户每次按下或释放键盘上的按键时都会产生事件
* 如果没有元素获得焦点，可以直接在文档上出发事件
* 键盘事件的事件对象有keyCode字段，指定按下或释放的键是哪个，另外还有键盘辅助键状态
* keydown和keyup是低级键盘事件，无论何时按下或释放按键，都会触发。
* 当keydown事件产生可打印字符时，在keydown和keyup之间会触发另外的keypress事件
* 当按下键重复产生字符时，keyup事件之前可能产生很多keypress事件

#### DOM事件
DOM事件规范标准化了不冒泡的focusin和focusout事件取代冒泡的focus和blur事件，标准化了冒泡的mouseenter和mouseleave事件取代不冒泡的mouseover和mouseout事件

#### HTML5事件
audio和video元素的事件列表：

|||||
|:--:|:--:|:--:|:--:|
|cnplay|loadeddata|playing|stalled|
|canplaythrough|loadedmetadata|progress|suspend|
|durationchange|loadstart|ratechange|timeupdate|
|emptied|pause|seeked|volumechange|
|ended|play|seeking|waiting|

HTML5的拖放API允许JavaScript应用参与基于操作系统的拖放操作，事件类型：
dragstart   drag    dragend     dragenter   dragover    dragleave   drop

HMLT5 离线缓存：
cached  checking    downloading error   noupdate    obsolete    progress    updateready

### 注册事件处理程序
1. 给事件目标对象或文档元素设置属性
2. 将事件处理程序传递给对象或元素

> addEventListener()    标准方法
> attachEvent()     IE9之前的IE版本

#### 设置JavaScript对象属性为事件处理程序
事件处理程序属性的名字由"on"后面跟着事件名组成：onclick、onchange、onload、onmouseover

事件处理程序属性的缺点：每个事件目标对应每种事件类型将最多只有一个处理程序

#### 设置HTML标签属性为事件处理程序
用于设置文档元素事件处理程序属性（property）也可以换成对应HTML标签的属性（attribute），属性值应该是JavaScript代码字符串。
```html
<button onclick="alert('Thank you');">点击这里</button>
```

一些事件类型要直接在浏览器上触发，在JavaScript中，这些事件处理程序在Window对象上注册，在HTML中 放在&lt;body&gt;标签上

|||||
|:--:|:--:|:--:|:--:|
|onafterprint|onfocus|ononline|onresize|
|onbeforeprint|onhashchange|onpagehide|onstorage|
|onbeforeunload|onload|onpageshow|onundo|
|onblur|onmessage|onpopstate|onunload|
|onerror|onoffline|onredo||

#### addEventListener()
Window对象、Document对象和所有文档元素都定义了addEventListener()的方法
* 第一个参数：要注册处理程序的事件类型，字符串，不包括前缀on
* 第二个参数：指定类型的事件发生时应调用的函数
* 第三个参数：布尔值，通常传递false，如果传递了true，那么函数将注册为捕获事件处理程序
* 可以通过多次调用addEventListener()为同一个对象注册同一事件类型的多个处理程序函数，当触发时，按照注册顺序调用

> removeEventListener()

与addEventListener()相对，从对象中删除事件处理程序
* 第一个参数： 事件类型，字符串
* 第二个参数： 事件处理程序函数
* 第三个参数： 布尔值

#### attachEvent()
IE9之前的IE不支持addEventListener()和removeEventListener()，IE5及以后版本定义了类似的方法：attachEvent()和detachEvent()

attachEvent()和detachEvent()方法的工作原理与addEventlistener()和removeEventListener()类似
* IE事件模型不支持事件捕获，所以attachEvent()和detachEvent()要求只有两个参数：事件类型和处理程序函数
* IE方法的第一个参数使用了带"on"前缀的事件处理程序属性名
* attachEvent() 允许相同的事件处理程序函数注册多次，触发时，注册函数的调用次数和调用次数一样

### 事件处理程序的调用
#### 事件处理程序的参数
通常调用事件处理程序时把事件对象作为一个参数，获取有关事件的详细信息
```javascript
function handler(event) {
    event = event || window.event;
}
```

#### 事件处理程序的运行环境
在实践处理程序内，this关键字指的是事件目标
对于attachEvent()注册的处理程序，它的this值是全局对象（Window）
```javascript
// 注意使用此方式注册的事件处理程序不能删除
function addEvent(target, type, handler) {
    if(target.addEventListener) {
        target.addEventListener(type, handler, false);
    } else {
        target.attachEvent("on" + type, function(event){
            return handler.call(target, event);
        });
    }
}
```

#### 事件处理程序的返回值
通常情况，返回值false就是告诉浏览器不要执行这个事件相关的默认操作
栗子：表单提交按钮的onclick事件处理程序能返回false组织浏览器提交表单

#### 调用顺序
* 通过设置对象属性或HTML属性注册的处理程序一直优先调用
* 通过addEventListener()注册的处理程序安装它们的注册顺序调用
* 通过attachEvent()注册的处理程序可能按照任何顺序调用，所以代码不应该依赖于调用顺序

#### 事件传播
在调用在目标元素上注册的事件处理函数后，大部分事件会“冒泡”到DOM树根，调用目标的父元素的事件处理程序，然后调用在目标的祖父元素上注册的事件处理程序，一直到Document对象，最后到达Window对象

文档元素上的load事件会冒泡，会在Document对象上停止冒泡，不会传播到Window对象，只有当整个文档都加载完毕时才会触发Window对象的load事件

#### 事件取消
在支持addEventListener()的浏览器中，也能通过调用事件对象的preventDefault()方法取消事件的默认操作，在IE9之间，可以通过设置事件对象的returnValue属性为false来达到同样的效果
```javascript
function cancelHandler(event) {
    var event = event || window.event;
    
    if(event.preventDefault) {
        event.preventDefault();
    }
    if(event.returnValue) {
        event.returnValue = false;
    }
    return false;
}
```

### 文档加载事件
大部分web应用都需要web浏览器通知她们文档加载完毕和作为操作准备就绪的事件，window对象的load事件
load事件直到文档和所有图片加载完毕时才会发生。

### 鼠标事件

|类型|说明|
|:--:|:--|
|click|高级事件，当用户按下并释放鼠标按键或其它方式激活元素时触发|
|contextmenu|可以取消的事件，当上下文菜单即将出现时触发，当前浏览器在鼠标右键点击时显示上下文菜单，所以这个事件也能像click事件那样使用|
|dblclick|当用户双击鼠标时触发|
|mousedown|当用户按下鼠标按键时触发|
|mouseup|当用户释放鼠标按键时触发|
|mousemove|当用户移动鼠标时触发|
|mouseover|当鼠标进入元素时触发，relatedTarget(在IE中是fromElement)指的是鼠标来自的元素|
|mouseout|当鼠标离开元素时触发，relatedTarget(在IE中是toElement)指的是鼠标要去往的元素|
|mouseenter|类似“mouseover”，但不冒泡，IE引入，HTML5标准化|
|mouseleave|类似“mouseout”，不冒泡|

传递给鼠标事件处理程序的事件对象拥有clientX和clientY属性，指定了鼠标指针相对于包含窗口的坐标，加入窗口的滚动偏移量，就可以吧鼠标位置转换成文档坐标

### 鼠标滚轮事件
除了Firefox以外的所有浏览器支持“mousewheel”事件，Firefox使用“DOMMouseScroll”

### 拖放事件
### 文本事件
浏览器有3个传统的键盘输入事件：keydown keyup keypress
### 键盘事件
当用户在键盘上按下或释放按键时，会产生keydown和keyup事件，由辅助键、功能键和字母键产生，如果用户按键时间足够长，会导致它开始重复，那么在keyup事件到达之前会收到多个keydown事件
keyCode指定了对应按下的键，对于产生打印字符的按键，keyCode指时按键上出现的主要字符的unicode编码

## 脚本化HTTP
超文本传输协议(HyperText Transfer Protocol, HTTP)规定Web浏览器如何从Web服务器获取文档和想Web服务器提交表单内容，以及Web服务器如何响应这些请求和提交。通常，http并不在脚本的控制下，只是当用户单机链接、提交表单和输入URL时才发生。
当脚本设置window对象的location属性或调用表单对象的submit()方法时，会初始化http请求，浏览器将会加载新页面。
Ajax应用的主要特点是使用脚本操作http和web服务器进行数据交换，不会导致页面重载。

### 使用XMLHttpRequest
实例化XMLHttpRequest对象：
> var request = new XMLHttpRequest();

```javascript
if(window.XMLHttpRequest === undefined) {
    window.XMLHttpRequest = function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e1) {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e2) {
                throw new Error("XMLHttpRequest is not supported");
            }
        }
    }
}
```

HTTP请求4部分：
* HTTP请求方法或“动作”(verb)
* 正在请求的URL
* 一个可选的请求头几何，其中可能包括身份验证信息
* 一个可选的请求主题

服务器返回的HTTP响应包含3个部分：
* 一个数字和文字组成的状态吗，用来显示请求的成功和失败
* 一个响应头几何
* 响应主题

#### 指定请求
创建XMLHttpRequest对象之后，发起HTTP请求的下一步是调用XMLHttpRequest对象的open()方法去指定这个请求的两个必需部分：方法和URL
* open()方法的第一个参数指定HTTP方法或动作，字符串，不区分大小写，一般是get和post
* get用于常规请求，适用于当url完全指定请求资源，当请求对服务器没有任何副作用以及当服务器的响应是可缓存时
* post常用语html表单
* 除了get和post之外，也可以是delete hade options put作为第一个参数
* open()方法的第二个参数是URL，是请求的主题

> request.setRequestHeader("Content-Type", "text/plain");

使用XMLHttpRequest发起HTTP请求的最后一步是向服务器发送请求，使用send方法
> request.send(null);

```javascript
// 用post方法发送纯文本给服务器
function postMessage(msg) {
    var request = new XMLHttpRequest();
    request.open("POST", "log.php");
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send(msg);
}
```

#### 取得响应
一个完整的HTTP响应由状态码、响应头集合和响应主体组成
* status和statusText属性以数字和文本的形式返回HTTP状态码
* 使用getResponseHeader()和getAllResponseHeaders()能查询响应头
* 响应主体可以从responseText属性中得到文本形式，从responseXML属性中得到Document形式

readyState是一个整数，指定了HTTP请求的状态

|常量|值|含义|
|:--|:--:|:--|
|UNSEND|0|open()尚未调用|
|OPENED|1|open()已调用|
|HEADERS_RECEIVED|2|接收到头信息|
|LOADING|3|接收到响应主体|
|DONE|4|响应完成|

监听readystatechange事件，需把事件处理函数设置为XMLHttpRequest对象的onreadystatechange属性，也可以使用addEventListener()或atachEvent()

```javascript
// 获取HTTP响应的onreadystatechange
function getText(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
        if(request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader("Content-Type");
            if(type.match(/^text/)) {
                callback(request.responseText);
            }
        }
    };
    request.send(null);
}
```

**同步响应**
XMLHttpRequest也支持同步响应，open()方法的第三个参数设置为false，那么send()方法将阻塞知道请求完成。

**响应解码**
```javascript
// 解析HTTP响应
function get(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
        if(request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader("Content-Type");
            if(type.indexOf("xml") !== -1 && request.responseXML) {
                callback(request.responseXML);
            } else if (type === "application/json") {
                callback(JSON.parse(request.responseText));
            } else {
                callback(request.responseText);
            }
        }
    };
    request.send(null);
}
```

#### 编码请求主题
**表单编码的请求**
```javascript
// 用于HTTP请求的编码对象
function encodeFormData(data) {
    if(!data) {
        return "";
    }
    var pairs = [];
    for(var name in data) {
        if(!data.hasOwnProperty(name)) {
            continue;
        }
        if(typeof data[name] === 'function') {
            continue;
        }
        var value = data[name].toString();
        name = encodeURIComponent(name.replace("%20", "+"));
        value = encodeURIComponent(value.replace("%20", "+"));
        pairs.push(name + "=" + value);
        return pairs.join('&');
    }
}
```

**JSON编码的请求**
```javascript
// 使用JSON编码主体来发起HTTP POST请求
function postJSON(url, data, claaback) {
    var request = new XMLHttpRequest();
    request.open("post", url);
    request.onreadystatechange = function() {
        if(request.readyState === 4 && callback) {
            callback(request);
        }
    };
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
}
```

### 借助&lt;script&gt;发送HTTP请求：JSONP
### 基于服务器端推送事件的Comet技术

## jQuery类库
* 丰富强大的语法（css选择器），用来查询文档元素
* 高效的查询方法，用来找到与css选择器匹配的文档元素集
* 一套有用的方法，用来操作选中的元素
* 强大的函数式编程技巧，用来批量操作元素集，而不是每次只操作单个
* 简介的语言用法，用来表示一系列顺序操作

### jQuery 基础
jQuery类库定义了一个全局函数：jQuery(),快捷别名：$
> var divs = $("div"); // 获取文档中的所有div元素

#### jQuery()函数
在jQuery类库中，最重要的方法是jQuery()方法（也就是$()），4种调用方式：
1. 最常用的调用方式，传递css选择器给$()方法。字符串
2. 传递一个Element、Document或Window对象给$()，此时，$()只是简单的将Element、Document或Window对象封装成jQuery对象并返回
3. 传递HTML文本字符串给$()方法，根据传入的文本创建好HTML元素并封装成jQuery对象返回
4. 传入一个函数给$()方法，此时，在文档加载完毕切DOM可操作时，传入的函数将被调用。

#### 查询与查询结果
$()的返回值是一个jQuery对象，jQuery对象是类数组：拥有length属性和结余0~length-1之间的数值属性，可以使用toArray()方法将jQuery对象转化为真实数组

selector属性：是创建jQuery对象时的选择器字符串
context属性：上下文对象，是$()方法的第二个参数，如果没有传递，默认的是Document对象
jquery属性：所有jQuery对象都有的属性，

```javascript
var bodydiv = $("div");
console.log(bodydiv.selector);  // div
console.log(bodydiv.context); // document
console.log(bodydiv.jquery); // 2.1.4 jquery版本号
```

**each()**
* 遍历jQuery对象中的所有元素，用来代替for循环，类似forEach()数组方法。接受一个回调函数作为参数，然后对jQuery对象中的每个元素调用回调函数
* 如果回调函数在任一个元素上返回false，遍历将在该元素后终止。
* each()返回调用自身的jQuery对象，可以用于链式调用
* 回调函数的第一个参数是索引值，第二个参数是当前元素
* 回调函数中的this值就是当前循环的元素，即第二个参数

**map()**
* 与Array.prototype.map()方法很接近
* 接受回调函数作为参数，并为对象中的每个元素都调用回调函数，同时将回调函数的返回值收集起来，封装成一个新的jQuery对象返回。
* 回调函数的第一个参数为索引值，第二个参数为循环中的元素，即函数的this。

**index()**
* 接受一个元素作为参数，返回值是该元素在jQuery对象中的索引值，如果找不到，返回-1
* 如果传入的参数是个字符串，会当成css选择器，并返回选择器的元素中第一个元素的索引值

**is()**
* 接受一个选择器作为参数，如果选中元素中至少有一个元素匹配该选择器，返回true

### jQuery的getter和setter
* jQuery使用同一个方法既当getter用又做setter用，如果传入一个新值，将设置此值，如果没有指定值，则返回当前值
* 用作setter时，这些方法会给jQuery对象中的每个元素设置值，然后返回该jQuery对象以便链式调用
* 用作getter时，只会查询元素集中的第一个元素，返回单个值（要遍历所有元素，使用map()），getter不会返回调用自身的jQuery对象
* 用作setter时，经常接受对象参数，该对象的每个属性都指定一个需要设置的名值对
* 用作setter时，经常接受函数参数

#### 获取和设置HTML属性
attr()方法是jQuery中用于HTML属性的getter和setter
```javascript
$("form").attr("action"); //获取第一个form元素的action属性
$("#icon").attr("src", "icon.gif"); // 设置src属性
$("#banner").attr({src: "banner.gif", alt: "Advertisement", width: 720, height: 64}); // 一次设置4个属性
$("a").attr("target", "_blank"); // 使得所有链接在新窗口中打开
$("a").attr("target", function(){
    if(this.host == location.host) {
        return "_self";
    }  else {
        return "_blank"
    }
});

$("a").attr({target: function(){}}); 
$("a").removeAttr("target");    // 让所有链接在本窗口中打开
```

#### 获取和设置css属性
css()方法和attr()类似，css()用于元素的css样式
```javascript
$("h1").css("font-weight"); // 获取第一个h1元素的字体重量
$("h1").css("fontWeight");
$("h1").css("font"); // 错误 不能获取复合样式
$("h1").css("font-variant", "smallcaps"); // 设置元素样式
$("div.note").css("border", "solid black 2px"); // 可以设置复合样式
$("h1").css({backgroundColor: "black", color: "white"}); // 设置多个样式
```

#### 获取和设置css类
* addClass() 选中的元素添加类
* removeClass() 选中的元素删除类
* toggleClass() 选中元素没有类时添加，有时删除
* hasClass() 判断某类是否存在

#### 获取和设置HTML表单值
val()方法，用来设置和获取HTML表单元素的value属性，还可用于获取和设置复选框、单选按钮以及select元素的选中状态

#### 设置和获取元素的内容
text()和html()方法用于获取和设置元素的纯文本或html内容

#### 获取和设置元素的位置高宽
**offset()**
* offset()方法可以获取或设置元素的位置
* 返回一个对象，带有left和top属性，用来表示x和y坐标
* 如果传入带有这些属性的对象给该方法，会给元素设置制定的位置
* 必要时，会设置css的position属性来使得元素可定位

```javascript
var elt = $("#sprite");
var position = elt.offset();
position.top += 100;
elt.offset(position);

$("h1").offset(function(index, curpos) {
    return {
        left: curpost.left + 25 * index,
        top: curpos.top
    };
});
```

**position()**
* position()方法只能用做getter，返回元素的位置是相对于其偏移父元素的， 而不是相对于文档的

**获取高宽信息**
* width()和height()方法返回基本的宽度和高度，不包括内边距、边框和外边距
* innerWidth()和innerHeight()返回元素的宽度和高度，包含内边距的宽度和高度
* outerWidth()和outerHeight()通常返回的是包含元素内边距和边框的尺寸，如果传入true，可以返回包含元素外边距的尺寸

**scrollTop()和scrollLeft()方法**
* 获取或设置元素滚动条的位置
* 可以用在Window对象以及Document元素上，当用在Document对象时，会获取或设置存放该Document的Window对象的滚动条位置

```javascript
function page(n) {
    var w = $(window);
    var pagesize = w.height();
    var current = w.scrollTop();
    w.scrollTop(current + n * pagesize);
}
```
#### 获取和设置元素数据
**data()**
* 可用来设置或获取与文档元素、document、window对象相关联的数据
* data()方法不接受函数参数

**removeData()**
* 用来从元素中删除数据

### 修改文档结构
#### 插入和替换元素
```javascript
$("#log").append("<br/>" + message); // 在#log元素的结尾处添加内容
$("h1").before("<hr/>"); // 在每个h1的前面添加水平线
$("h1").after("<hr/>"); // 在每个h1的后面添加水平线
$("hr").replaceWith("<br/>"); // 替换hr元素为br元素
$("h2").each(function(){  // 将h2替换成好，保持内容不变
    var h2 = $(this);
    h2.replaceWith("<h1>" + h2.html() + "</h1>");
});
```

|操作|\$(target).method(content)|\$(content).method(target)|
|:--|:--|:--|
|在目标元素的结尾处插入内容|append()|appendTo()|
|在目标元素的起始处插入内容|prepend()|preprendTo()|
|在目标元素的后面插入内容|after()|insertAfter()|
|在目标元素的前面插入内容|before()|insertBefore()|
|将目标元素替换为内容|replaceWith()|replaceAll()|

* 如果传递字符串给第二列中的方法，会把它当做需要插入的HTML字符串，如果传递字符串给第三列中的方法，会把它当做选择器，用来标识目标元素（也可以直接传入jQuery对象、元素或者文本节点来指明目标元素）
* 第三列中的方法不接受函数参数、第二列中的方法可以
* 第二列中的方法返回调用自身的jQuery对象。该对象中的元素有可能有新内容或新兄弟节点，但这些元素自身没有修改

#### 复制元素
clone()方法创建并返回每一个选中元素的一个副本，返回的jQuery对象的元素还不是文档的一部分，可以将其插入文档中

#### 包装元素
wrap()包装每一个选中元素
wrapInner() 包装每一个选中元素的内容
wrapAll()将选中元素作为一组来包装

#### 删除元素
empty() 方法 删除每个选中元素的所有子节点（包括文本节点），但不会修改元素自身
remove() 方法会从文档中删除选中元素，会溢出所有事件处理程序
detach() 和remove()类似，但不会移除事件处理程序和数据

### 使用jQuery处理事件
调用jQuery的事件注册方法可以给所有选择元素注册处理程序

|||||
|:--|:--|:--|:--|
|blur()|focusin()|mousedown()|mouseup()|
|change()|focusout()|mouseenter()|resize()|
|click()|keydown()|mouseleave()|scroll()|
|dbclick()|keypress()|mousemove()|select()|
|error()|keyup()|mouseout()|submit()|
|focus()|load()|mouseover()|unload()|

* focus和blur事件不支持冒泡，但focusin和focusout事件支持
* resize和unload事件类型只在Window对象中触发
* scroll()方法经常用于$(window)对象上，也可以用在有滚动条的任何元素上
* load()方法可以在$(window)对象上调用，用来给窗口注册加载事件处理程序
* hover()用来给mouseenter和mouseleave事件注册处理成与，调用hover(f, g)和调用mouseenter(f)然后调用mouseleave(g)一样
* toggle()，将事件处理程序函数绑定到单机事件，也可以指定两个或多个处理程序函数，单击发生时，jQuery每次会调用一个处理程序函数，例如：toggle(f, g, h);第一次单击触发f()，第二次调用g()，第三次调用h()，第四次调用f()。。。

#### jQuery事件处理程序
如果处理程序返回false，与该事件相关联的默认行为，以及事件接下来的冒泡都会取消，即：返回false等同于调用Event对象的preventDefault()和stopPropagation()方法

#### jQuery事件对象
jQuery定义自己的Event对象来隐藏浏览器之间的差异，事件处理程序函数的第一个参数为jQuery事件对象

* metakey 如果原生事件对象没有metakey属性，jQuery会使其与ctrlkey属性值一样，在Mac OS中，Command键设置meta键属性
* pageX pageY  如果原生事件对象没有定义这两属性，但是定义了鼠标指针的clientX和clientY，jQuery会计算出鼠标指针的文档坐标并存储在pageX和pageY中
* timeStamp  事件发生时的事件，单位是毫秒，由Date.getTime()返回

#### 事件处理程序的高级注册
bind()方法
* 第一个参数：事件类型，可以是多个，空格分割
* 第二个参数：任意值，对应Event对象的data属性
* 第三个参数：处理程序函数

#### 注销事件处理程序
用bind()注册事件处理程序后，可以使用unbind()注销，避免在将来的事件中触发

#### 触发事件
> $("#my_form").submit();  // 就和用户单击提交按钮一样

**trigger()方法**
* 第一个参数为事件类型

```javascript
$("#my_form").trigger("submit");
$("button").trigger("click!"); // 触发没有命名空间的单击处理程序

$("#button1").click(function(e){ // button1的单击程序触发button2上的单击程序
    $("#button2").trigger(e);
});
```

### 动画效果
时间：
fast:200ms
slow:600ms
默认:400ms

#### 简单动画
**fadeIn()、fadeOut()、fadeTo()**
* 最简单的动画：fadeIn()和fadeOut()简单的改变css的opacity属性来显示或隐藏元素
* fadeIn()、fadeOut()接受可选的时长和回调函数
* fadeTo() 第一个参数是时长，第二个参数是opacity目标值，第三个参数是回调函数

**show()、hide()、toggle()**
* hide() 将元素从布局中移除，类似css的display属性设置为none
* 不带参数时，hide()和show()方法只是简单地立刻隐藏或显示选中元素，带有时长参数时，会显示动画过程
* toggle()可以改变元素可是状态，如果隐藏则调用show()，如果显示则调用hide()，可以传入时长来显示动画效果

**slideDown()、slideUp()、slideToggle()**
* slideUp() 隐藏选中元素，高度动态变化到0，然后隐藏。
* slideDown() 与slideUp()相反
* slideToggle() 切换
* 都接受可选的时长和回调参数

#### 自定义动画
**animate()**
* 第一个参数：必须有，且必须是一个对象，对象的属性指定要变化的css属性和对应的目标值，animate()方法会将每个元素的这些css属性从初始值变化到指定的目标值
* 第二个参数时可选的，可以传入一个选项对象给animate()方法
* 除了可以将选项对象作为第二个参数，还可以传递动画时长为第二个参数，数据类型为数值或字符串。
* 可以指定缓动函数名为第三个参数
* 回调函数为第四个参数

```javascript
// 模拟slideUp()
$("img").animate({height: 0});
```

动画属性对象：

animate()方法的第一个参数必须时对象，对象的属性名时css属性名，属性值是动画目标值，动画只支持树脂属性，对于颜色、字体或display等枚举属性时无法实现动画效果的

动画选项对象：

animate()发放的第二个参数时可选的，选项对象制定动画如何执行，duration属性指定动画持续的毫秒事件，值可以时fast、slow等；complete属性，指明在动画完成时的回调函数；step

|属性|说明|
|:--|:--|
|duration属性|指定动画持续的毫秒时间，值可以是 fast、slow之类等|
|complete属性|指明在动画完成时的回调函数|
|step属性|指明在动画每一步或每一帧调用的回调函数函数，回调函数重点this指向正在持续变化的元素，第一个参数则是正在变化的属性和当前值|
|queue属性|制定动画是否需要队列化，是否需要等所有尚未发生的动画都完成后再执行该动画，默认：队列化|
|easing属性|指定缓动函数名|

缓动函数：

动画有加速或减速效果，默认缓动函数是正弦函数，开始很慢，接着加速，然后在缓慢，默认缓动函数名为“swing”，线性缓动函数名为“linear”

#### 动画的取消、延迟和队列
**stop()方法**
* 用来停止选中元素上当前正在执行的任何动画
* 第一个参数如果是true，会清楚该选中元素上的动画队列：出了停止当前动画，还会取消任何等待执行的动画，默认值是false
* 第二个参数用来指定正在持续变化的css属性是否保留当前值，还是应该变化到最终目标值，传入true可以变化到最终值，传入false，会保持为当前值

**delay()方法**
* 添加一个时间延迟到动画队列中
* 第一个参数是时长(以毫秒为单位的数值或字符串)
* 第二个参数是队列名，是可选的

### jQuery中的Ajax
#### load()方法
* 传入一个URL，异步加载该URL的内容，然后将内容插入每一个选中元素中，替换掉已经存在的任何内容
* 还可以接受两个可选参数，第一个可选参数表示的数据，可以加到url后面，如果是字符串，会追加到URL后面，如果是对象，会被转化为用&分割的名值对与请求一起发送
* 第二个可选参数是回调函数，当Ajax请求成功或为成功，以及Url加载完毕并插入选中元素时，会调用回调函数，回调函数的参数：被加载URL的完整文本内容、状态码字符串（'success', 'error', 'timeout'）、用来加载URL的XMLHttpRequest对象


```javascript
$("#temp").load("001.html", "zipcode=02134");
$("#temp").load("001.html", {zipcode: 02134, units: 'F'});
```

jQuery的Ajax状态码:
|状态码|说明|
|:--:|:--|
|success|表示请求成功|
|notmodified|表示请求已正常完成，但服务器返回的响应内容是HTTP304 ‘Not Modefied’， 表示请求的URL内容和上次请求相同，没有变化，只有选项中设置ifModified为true，此状态码才会出现|
|error|请求没有成功完成，检查回调函数中的XMLHttpRequest对象的HTTP状态码来获取详细细节|
|timeout|如果Ajax请求没有在选定的超时区间内完成，会电泳错误回调，只有指定timeout选项时才能看到此状态码|
|parsererror|HTTP请求已成功完成，但jQuery无法安装期望方式解析|

#### Ajax工具函数
jQuery的其他Ajax高级工具不是方法，而是函数，可以通过jQuery或者$直接调用，而不是在jQuery对象上调用
* jQuery.getScript()加载并执行JavaScript代码文件
* jQuery.getJSON()加载URL，并解析为JSON，将解析结果传递到指定的回调函数中
* jQuery.getScript()和jQuery.getJSON()都会调用通用的URL获取函数：jQUery.get()
* jQuery.post()和jQuery.get()类似，但执行的是HTTP post请求

**jQuery.getScript()**
* 第一个参数是JavaScript代码文件的URL
* 第二个参数是回调函数，jQuery会在代码加载和执行完成后调用该回调函数

**jQuery.getJSON()**
* 与jQuery.getScript类似，获取文本，调用指定的回调函数
* 获取到文本后，不会当成脚本执行，而会解析为JSON
* 解析结果作为回调函数的第一个参数

**jQuery.get()和jQuery.post()**
* 获取指定的URL的内容，如果有数据的话，还可以传入指定数据，最后将结果传递给指定的回调函数
* jQuery.get()使用HTTP get请求来实现
* jQuery.post() 使用 HTTP post 请求

**jQuery.ajax()函数**
jQuery的所有Ajax工具最后都会调用jQuery.ajax()

* 仅接受一个参数：一个选项对象，该对象指定Ajax请求如何执行的很多细节

```javascript
// jQuery.getScript(url, callback) 与下面的ajax等价
jQuery.ajax({
    type: "GET",
    url: url,
    data: null,
    dataType: "script",
    success: callback
});
```

**通用选项：**

|选项|说明|
|:--:|:--|
|type|指定HTTP的请求方法，默认是“GET”，另一个常用值是“POST”|
|url|要获取的URL，对于GET请求，data选项会添加到该URL后|
|data|添加到URL中（对于get请求）或在请求的内容体中(post请求)发送数据|
|dataType|指定响应数据的预期类型，以及jQuery处理该数据的方式，合法值是"text"、"html"、"script"、"json"、"jsonp"和"xml"，如没有指定，jQuery会检查响应中的Content-Type头来确定如何处理返回的数据|
|contentType|指定请求的HTTP Content-Type头，默认是"application/x-www-form-urlencoded"|
|timeout|超时时间，单位是毫秒，如果设置了该选项，请求没有在指定超时时间内完成时，就会取消同时出发error回调，回调中的状态码参数为"timeout"，默认时间是0，表示出发请求完成，否则永远不会取消|
|cache|对于get请求，如果选项设置为false，jQuery会添加一个参数，参数值是当前时间，可以禁用浏览器缓存|
|ifModified|当选项设置为true是，jQuery会为请求的每个URL记录Last-Modified和If-None-Math响应头的值|
|global|指定jQuery是否应该出发上面描述的Ajax请求过程中的事件，默认是true，设置为false会禁用Ajax相关的所有事件|

**回调**

|选项|说明|
|:--:|:--|
|context|指定回调函数在调用时的上下文对象this，如果不设置，this会指向选项对象，如果设置应该为window、document或触发事件所在的Element|
|beforeSend|指定Ajax请求发送到服务器之前激活的回调函数，第一个参数是XMLHttpRequest对象，第二个参数是请求的选项对象，beforeSend的回调函数使得程序有机会再XMLHttpRequest对象上设置自定义HTTP头部，如果函数返回false，Ajax会取消|
|success|指定Ajax请求成功时调用的回调函数，第一个参数是服务器发送的数据，第二个参数是jQuery状态码，第三个参数是用来发送该请求的XMLHttpRequest对象|
|error|指定Ajax请求不成功时调用的回调函数,第一个参数是请求的XMLHttpRequest对象，第二个参数是jQuery状态码|
|complete|指定Ajax请求完成时激活的回调函数，在调用success或error之后调用complete的回调，第一个参数是XMLHttpRequest对象，第二个参数则是状态码|

#### Ajax事件

|回调|事件类型|处理程序注册方法|
|:--|:--|:--|
|beforeSend|"ajaxSend"|ajaxSend()|
|success|"ajaxSuccess"|ajaxSuccess()|
|error|"ajaxError"|ajaxError()|
|complete|"ajaxComplete"|ajaxComplete()|
||"ajaxStart"|ajaxStart()|
||"ajaxStop"|ajaxStop()|

### 工具函数
*jQuery.browser*

browser属性不是函数而是一个对象，可用于客户端嗅探，如果浏览器是IE，该对象会有一个msie属性，值为true；如果浏览器是Firefox或与其相关，会有一个值为true的mozilla属性。在Safari和Chrome中，webkit属性为true；在Opera中，opera属性为true；version属性包含了浏览器的版本号

*jQuery.contains()*

该函数接受两个文档元素作为参数，如果第一个元素包含第二个元素，返回true，否则返回false

*jQuery.each()*

和each()方法不同，each()方法只能遍历jQuery对象，而jQuery.each()工具函数可以遍历数组元素或对象属性，第一个参数是要遍历的数组或对象，第二个参数是要在每个数组元素或对象属性上调用的函数，函数会有两个参数，数组元素的序号或元素的属性名，以及数组元素的值或对象的属性值，函数中的this值和第二个参数是一样的，如果返回false，jQuery.each()会停止当前遍历并立刻返回

*jQuery.extend()*

接受对象作为参数，将第二个及其以后参数对象的属性复制到第一个对象中，如果同名属性在第一个参数对象中已经存在，则会覆盖，忽略任何值为null和undefined的属性，如果仅传入一个对象，该对象的属性会被复制到jQuery对象中。返回是属性被复制到的对象

*jQuery.globalEval()*

在全局上下文中执行JavaScript代码字符串，就像在script元素的内容一样

*jQuery.grep()*

与Array对象的filter()方法类似，介绍数组作为第一个参数，以及一个判断函数作为第二个参数，返回一个新数组，新数组由调用判断函数时返回true的元素组成，如果grep传入第三个参数 true，则会反转判断函数；判断函数的第一个参数为元素的值，第二个参数为索引

*jQuery.isArray()*

当参数是元素Array对象时，返回true

*jQuery.isEmptyObject()*

当参数对象没有可枚举的属性时，返回true

*jQuery.isFunction()*

当参数是原生Function对象时，返回true，注意：在IE8及以前的版本中，window.alert() 和window.attachEvent()等浏览器返回false

*jQuery.isPlainObject()*

如果参数是“纯”对象，而不是某些特定类型或类的对象的实例时，返回true

*jQuery.makeArray()*

如果参数是类数组对象，该函数会将对象的属性复制到一个新的数组中，并返回

*jQuery.map()*

与Array对象的map()方法类似，接受数组组成或类数组对象作为第一个参数，第二个参数则为映射函数。

*jQuery.marge()*

接受两个数组或类数组对象，会将第二个参数的元素添加到第一个上面，并返回第一个参数，第一个数组会修改，第二个不会。

*jQuery.parseJSON()*

解析JSON格式的字符串，返回解析结果，格式有误时，抛出异常

*jQuery.trim()*

接受字符串为唯一参数，返回字符串开头和结尾处空白字符删除后的字符串

### jQuery选择器和选取方法

#### jQuery选择器
**简单选择器**

|过滤器|含义|
|:--|:--|
|#id|匹配id属性为id的元素，在有效的HTML文档中，永远不会出现多个元素用于相同的id，通常作为独立选择器使用|
|.class|匹配class属性，含有class单词的所有元素|
|[attr]|匹配用于attr属性(和值无关)的所有元素|
|[attr=val]|匹配attr属性且值为val的所有元素|
|[attr!=val]|匹配没有attr属性，或attr属性的值部位val的所有元素|
|[attr^=val]|匹配attr属性值以val开头的元素|
|[attr$=val]|匹配attr属性值以val结尾的元素|
|[attr*=val]|匹配attr属性值含有val的元素|
|[attr~=val]|在其attr属性解释为一个由空格分割的单词列表时，匹配其中包含单词val的元素 “div.note”与“div[class~=note]”相同|
|[attr|=val]|匹配attr属性值以val开头且其后没有其他字符，或者其他字符是以连接符开头的元素|
|:animated|匹配正则动画中的元素，该动画是由jQuery产生的|
|:button|匹配&lt;button type='button'$gt;和$lt;input type='button'$gt;元素|
|:checkbox|匹配&lt;input type='checkbox'&gt;元素，当显示带有input标签前缀"input:checkbox"时，该过滤器更高效|
|:contains(text)|匹配含有指定text文本的元素|
|:disabled|匹配禁用的元素|
|:empty|匹配没有子节点、没有文本内容的元素|
|:enabled|匹配没有禁用的元素|
|:eq(n)|匹配基于文档顺序、序号从0开始的选中列表中的第n个元素|
|:even|匹配列表中偶数序号的元素，由于第一个元素的序号是0，因此实际上选中的是第1个、第3个、第5个等元素|
|:file|匹配&lt;input type='file'&gt;元素|
|:first|匹配列表中的第一个元素，和'eq(0)'相同|
|:first-child|匹配的元素是其父节点的第一个元素|
|:gt(n)|匹配基于文档顺序、序号从0开始的选中列表中序号大于n的元素|
|:has(sel)|匹配元素拥有匹配内嵌选择器sel的子孙元素|
|:header|匹配所有头元素：&lt;h1&gt;、&lt;h2&gt;、&lt;h3&gt;、&lt;h4&gt;、&lt;h5&gt;或&lt;h6&gt;|
|:hidden|匹配所有在屏幕上不可见的元素|
|:image|匹配&lt;input type='image'&gt;元素，但不会匹配&lt;img&gt;元素|
|:input|匹配用户输入元素：&lt;input&gt;、&lt;textarea&gt;、&lt;select&gt;、&lt;button&gt;|
|:last|匹配选中列表中的最后一个元素|
|:last-child|匹配元素是其父节点的最后一个子元素|
|:lt(n)|匹配基于文档顺序、序号从0开始的选中列表中序号小于n的元素|
|:not(sel)|匹配的元素不匹配内嵌选择器sel|
|:nth(n)|与":eq(n)"相同|
|:nth-child(n)|匹配的元素是其父节点的第n个子元素|
|:odd|匹配列表中的奇数序号的元素|
|:only-child|匹配那些事其父节点唯一子节点的元素|
|:parent|匹配是父节点的元素，与":empty"相反|
|:password|匹配&lt;input type='password'&gt;元素|
|:radio|匹配&lt;input type='radio'&gt;元素|
|:reset|匹配&lt;input type='reset'&gt;和&lt;button type='reset'&gt;元素|
|:selected|匹配选中的&lt;option&gt;元素|
|:submit|匹配&lt;input type='submit'&gt;和&lt;button type='submit'&gt;元素|
|:text|匹配&lt;input type='text'&gt;元素|
|:visible|匹配所有当前可将的元素，和":hidden"相反|

**组合选择器**

|组合方式|含义|
|A B|从匹配选择器A的元素的子孙元素中，选取匹配选择器B的文档元素，组合符就是空白字符|
|A &gt; B|从匹配选择器A的元素的子元素中，选取匹配选择器B的文档元素|
|A + B|从匹配选择器A的元素的下一个兄弟元素中，选择匹配选择器B的文档元素|
|A ~ B|从匹配选择器A的元素后面的兄弟元素中，选取匹配选择器B的文档元素|

```javascript
"blockquote i" // 匹配<blockquote>里的<i>元素
"ol > li" // <li>元素是<ol>的直接子元素
"#output + *" // id='output'元素后面的兄弟元素
"div.note > h1 + p" // 紧跟<h1>的<p>元素，在<div class='note'>里面
```

**选择器组**
```javascript
"h1, h2, h3" // 匹配<h1>、<h2>、<h3>元素
"#p1, #p2, #p3" // 匹配id为p1、p2、p3的元素
```

#### 选取方法

|方法|说明|
|:--|:--|
|first()|返回jQuer对象仅包含选中元素中的第一个|
|last()|返回的jQuery对象则只包含最后一个元素|
|eq()|返回的jQuery对象只包含指定序号的单个选中元素|
|slice()|接受开始和结束序号，返回的jQuery对象包含从开始到结束序号的元素集（不包含结束序号）|
|filter()|三种调用方式：1. 传递选择器字符串给filter(),返回一个jQuery对象，仅包含也匹配该选择器的选中元素；2. 传递另一个jQuery对象给filter(),返回一个新的jQuery对象，包含两个jQuery对象的交集；3. 传递判断函数给filter()，仅包含判断海曙为true的函数，判断函数的this值为当前元素，参数是元素序号|
|not()|含义与filter()相反|
|has()|如果传入选择器，has()返回一个新的jQuery对象，仅包含有子孙元素匹配该选择器的选中元素|
|find()|在每个当前选中元素的子孙元素中寻找指定选择器字符串匹配的元素，返回新的jQuery对象|
|children()|返回每个选中元素的直接子元素|
|contents()|与children()类似，不同的是，会返回每个元素的所有子节点，包括文本节点|
|next()|返回选中元素的下一个兄弟元素|
|prev()|返回选中元素的上一个兄弟元素|
|nextAll()|返回选中元素的前面的所有兄弟元素|
|prevAll()|返回选中元素的后面的所有兄弟元素|
|parent()|返回选中元素的父节点|
|parents()|返回选中元素的祖先节点，直到html元素|
|closest()|必须传入一个选择器字符串，返回选中元素的祖先元素中匹配选择器的最近的一个祖先元素|
|end()|用来跳出栈，返回保存的jQuery对象|

### jQuery的插件扩展
jQuery插件是普通的JavaScript代码文件，只需要使用&lt;script&gt;元素引入就可以，必须在jQuery之后引入插件


## 客户端存储

客户端存储的几种方式：
1. web存储， 包含localStorage对象和sessionStorage对象，持久化关联数组，是名值对的映射表，支持大容量数据存储同时兼容当前所有主流浏览器
2. cookie， 只适合存储少量文本数据，任何cookie形式存储的数据，不论服务器端是否需要，每次HTTP请求都会吧这些数据传输到服务器端
3. IE User Data， IE5以后、IE8之前，可以做为web存储的替代方案，“userData”实现一定量的字符串数据存储
4. 离线Web应用， 实现将Web应用整体存储在客户端，而不仅仅是存储数据
5. Web数据库， 索引数据库API，使用事件处理机制
6. 文件系统API， 在该文件系统中可以对文件读写

### localStorage 和 sessionStorage
Window对象上的两个属性：localStorage 和 sessionStorage，Storage对象，持久化关联数组，字符串所有，值也是字符串形式。
```javascript
var name = localStorage.username;
name = localStorage['username'];
if (!name) {
	name = prompt('Wht is your name?');
	localStorage.username = name;
}

// 迭代所有存储的name/value 对
for(var name in localStorage) {
	var value = localStorage[name]
}
```

#### 存储有效期和作用域
* localStorage 和 sessionStorage 的区别在于存储的有效期和作用域不同
* 通过localStorage 存储的数据是永久的，永不过期
* localStorage的作用去是限定在文档源级别的（协议、主机名、端口确定是不是同一文档源）
* 同源的文档之间共享同样的localStorage数据，可以相互读取数据，可以覆盖数据
* localStorage 的作用域受浏览器限制
* sessionStorage的作用域也限定在文档源中，同事限定在窗口中。

#### 存储API
setItem()方法 将对应的名字和值传递进去，可以实现数据存储
getItem()方法 将名字传递进去，可以获得对应的值
removeItem()方法 可以删除对应的数据
clear()方法 可以删除所有存储的数据

```javascript
localStorage.setItem('x', 1);
localStorage.getItem('x');

for(var i = 0; i < localStorage.length; i++) {
	var name = localStorage.key(i);	// 获取第i对的名字
	var value = localStorage.getItem(name); // 获取对应的值
}

localStorage.removeItem('x'); // 删除'x'项
localStorage.clear();	// 全部删除
```

#### 存储事件
* 无论什么时候存储在localStorage或者sessionStorage的数据发生改变，浏览器都会在可见窗口对象上触发存储事件
* 对数据进行改变的窗口对象上不会触发，如果浏览器有两个标签页都打开了来自同源的页面，其中一个页面在localStorage上存储了数据，另外一个标签页就会收到一个存储事件
* 可以通过addEventListener() （IE下使用attachEvent()方法），还可以给Window对象设置onstorage属性的方式

存储事件相关的属性

|属性|说明|
|:--:|:--|
|key|被设置或者移除的项的名字或者键名，如果调用的是clear()函数，那么该属性值为null|
|newValue|保存该项的新值，或者调用removeItem()时，属性值为null|
|oldValue|改变或者删除该项前，保存该项原先的值，当插入新项时，属性值为null|
|storageArea|类似于Window对象上的localStorage或者是sessionStorage属性|
|url|触发存储变化脚本所在文档的URL|
