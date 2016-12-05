# Bootstrap 基础

## html模版
```html
<!DOCTYPE html>
<html>
<head>
	<title>Bootstrap模板</title>
	<meta charset='utf-8' />
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<link href='http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'>
</head>
<body>
<script src='http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js'></script>
<script src='http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>
```

## 标题
Bootstrap和普通的HTML页面一样，定义标题都是使用标签&lt;h1&gt;到&lt;h6&gt;,只不过Bootstrap覆盖了其默认的样式，使用其在所有浏览器下显示的效果一样

```html
<!DOCTYPE html>
<html>
<head>
	<title>title</title>
	<meta charset='utf-8' />
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<link href='http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'>
</head>
<body>
<h1>Bootstrap标题一1</h1>
<h2>Bootstrap标题二2</h2>
<h3>Bootstrap标题三3</h3>
<h4>Bootstrap标题四4</h4>
<h5>Bootstrap标题五5</h5>
<h6>Bootstrap标题六6</h6>

<div class='h1'>Bootstrap标题一1</div>
<div class='h2'>Bootstrap标题二2</div>
<div class='h3'>Bootstrap标题三3</div>
<div class='h4'>Bootstrap标题四4</div>
<div class='h5'>Bootstrap标题五5</div>
<div class='h6'>Bootstrap标题六6</div>

<script src='http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js'></script>
<script src='http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>
```

副标题&lt;small&gt; 标签
```html
<h1>一级主标题<small>一级副标题</small></h1>
<div class='h1'>一级主标题<div class='small'>一级副标题</div></div>
```

## 段落（正文文本）
段落是排版中另一个重要元素之一。在Bootstrap中为文本设置了一个全局的文本样式，直接用&lt;p&gt;标签

* 全局文本字号为14px(font-size)
* 行高为1.42857143（line-height），大约是20px
* 颜色为深灰色#333
* 字体为"Helvetica Neue", Helvetica, Arial, sans-serif;（font-family）

## 强调内容
在实际项目中，对于一些重要的文本，希望突出强调的部分都会做另外的样式处理。Bootstrap同样对这部分做了一些轻量级的处理。

如果想让一个段落p突出显示，可以通过添加类名“.lead”实现，其作用就是增大文本字号，加粗文本，而且对行高和margin也做相应的处理。用法如下：
```html
<p>我是普通文本，我的样子长成这样我是普通文本，我的样子长成这样我是普通文本，</p>
<p class="lead">我是特意要突出的文本，我的样子成这样。我是特意要突出的文本，我的样子长成这样。</p>
```

## 粗体
粗体就是给文本加粗，在普通的元素中我们一般通过font-weight设置为bold关键词给文本加粗。在Bootstrap中，可以使用&lt;b&gt;和&lt;strong&gt;标签让文本直接加粗。
```html
<p>我在学习<strong>Bootstrap</strong>，我要掌握<strong>Bootstrap</strong>的所有知识。</p>
```

## 斜体
在排版中，除了用加粗来强调突出的文本之外，还可以使用斜体。斜体类似于加粗一样，除了可以给元素设置样式font-style值为italic实现之外，在Bootstrap中还可以通过使用标签&lt;em&gt;或&lt;i&gt;来实现。

例如，下面的代码使用了&lt;em&gt;和&lt;i&gt;标签定义了强调文本：
```html
<p>我在慕课网上跟<em>大漠</em>一起学习<i>Bootstrap</i>的使用。我一定要学会<i>Bootstrap</i>。</p>
```

## 强调相关的类
在Bootstrap中除了使用标签&lt;strong&gt;、&lt;em&gt;等说明正文某些字词、句子的重要性，Bootstrap还定义了一套类名，这里称其为强调类名（类似前面说的“.lead”）,这些强调类都是通过颜色来表示强调，具本说明如下：

* .text-muted：提示，使用浅灰色（#999）
* .text-primary：主要，使用蓝色（#428bca）
* .text-success：成功，使用浅绿色(#3c763d)
* .text-info：通知信息，使用浅蓝色（#31708f）
* .text-warning：警告，使用黄色（#8a6d3b）
* .text-danger：危险，使用褐色（#a94442）

```html
<div class='text-muted'>text-muted 类效果</div>
<div class='text-primary'>text-primary 类效果</div>
<div class='text-success'>text-success 类效果</div>
<div class='text-info'>text-info 类效果</div>
<div class='text-warning'>text-warning 类效果</div>
<div class='text-danger'>text-danger 类效果</div>
```

## 文本对齐风格
在排版中离不开文本的对齐方式。在CSS中常常使用text-align来实现文本的对齐风格的设置。其中主要有四种风格：
* 左对齐，取值left
* 居中对齐，取值center
* 右对齐，取值right
* 两端对齐，取值justify

为了简化操作，方便使用，Bootstrap通过定义四个类名来控制文本的对齐风格：
* .text-left：左对齐
* .text-center：居中对齐
* .text-right：右对齐
* .text-justify：两端对齐

## 列表--简介
在HTML文档中，列表结构主要有三种：有序列表、无序列表和定义列表。具体使用的标签说明如下：

*无序列表*
```html
<ul>
    <li>…</li>
</ul>
```

*有序列表*
```html
<ol>
    <li>…</li>
</ol>
```

*定义列表*
```html
<dl>
    <dt>…</dt>
    <dd>…</dd>
</dl>
```

在Bootstrap中默认情况下无序列表和有序列表是带有项目符号的，但在实际工作中很多时候，我们的列表是不需要这个编号的，比如说用无序列表做导航的时候。Bootstrap为众多开发者考虑的非常周道，通过给无序列表添加一个类名“.list-unstyled”,这样就可以去除默认的列表样式的风格

## 列表--内联列表
Bootstrap像去点列表一样，通过添加类名“.list-inline”来实现内联列表，简单点说就是**把垂直列表换成水平列表，而且去掉项目符号（编号），保持水平显示**。也可以说内联列表就是为制作水平导航而生

## 列表--定义列表
对于定义列表而言，Bootstrap并没有做太多的调整，只是调整了行间距，外边距和字体加粗效果。
```html
<dl>
	<dt>太原</dt>
	<dd>迎泽</dd>
	<dd>小店</dd>
	<dd>杏花岭</dd>
	<dd>尖草坪</dd>
	<dd>万柏林</dd>
	<dt>吕梁</dt>
	<dd>离石</dd>
	<dd>中阳</dd>
	<dd>方山</dd>
	<dd>柳林</dd>
</dl>
```

## 列表--水平定义列表
水平定义列表就像内联列表一样，Bootstrap可以给<dl>添加类名“.dl-horizontal”给定义列表实现水平显示效果。
```html
<dl class='dl-horizontal'>
	<dt>太原</dt>
	<dd>迎泽</dd>
	<dd>小店</dd>
	<dd>杏花岭</dd>
	<dd>尖草坪</dd>
	<dd>万柏林</dd>
	<dt>吕梁</dt>
	<dd>离石</dd>
	<dd>中阳</dd>
	<dd>方山</dd>
	<dd>柳林</dd>
</dl>
```

## 代码
在Bootstrap主要提供了三种代码风格
* 使用&lt;code&gt;&lt;/code&gt;来显示单行内联代码
* 使用&lt;pre&lt;&lt;/pre&gt;来显示多行块代码
* 使用&lt;kbd&lt;&lt;/kbd&gt;来显示用户输入代码

* &lt;code&gt;：一般是针对于单个单词或单个句子的代码
* &lt;pre&lt;：一般是针对于多行代码（也就是成块的代码）
* &lt;kbd&lt;:一般是表示用户要通过键盘输入的内容

&lt;pre&gt;元素一般用于显示大块的代码，并保证原有格式不变。但有时候代码太多，而且不想让其占有太大的页面篇幅，就想控制代码块的大小。Bootstrap也考虑到这一点，你只需要在pre标签上添加类名“.pre-scrollable”，就可以控制代码块区域最大高度为340px，一旦超出这个高度，就会在Y轴出现滚动条

## 表格是Bootstrap的一个基础组件之一，Bootstrap为表格提供了**1种基础样式和4种附加样式**以及**1个支持响应式的表格**。在使用Bootstrap的表格过程中，只需要添加对应的类名就可以得到不同的表格风格

* .table：基础表格
* .table-striped：斑马线表格
* .table-bordered：带边框的表格
* .table-hover：鼠标悬停高亮的表格
* .table-condensed：紧凑型表格
* .table-responsive：响应式表格
