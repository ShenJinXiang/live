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
|--|--|--|--|
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
|--|--|
|Firefox|-moz-|
|Chrome|-webkit-|
|IE|-ms-|

### 重要的CSS属性
|属性|描述|
|--|--|
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
||||||
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
|--|--|
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
|--|:--:|--|
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
