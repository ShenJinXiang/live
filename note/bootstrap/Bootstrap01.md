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
* &lt;pre&gt;：一般是针对于多行代码（也就是成块的代码）
* &lt;kbd&gt;:一般是表示用户要通过键盘输入的内容

&lt;pre&gt;元素一般用于显示大块的代码，并保证原有格式不变。但有时候代码太多，而且不想让其占有太大的页面篇幅，就想控制代码块的大小。Bootstrap也考虑到这一点，你只需要在pre标签上添加类名“.pre-scrollable”，就可以控制代码块区域最大高度为340px，一旦超出这个高度，就会在Y轴出现滚动条

## 表格
表格是Bootstrap的一个基础组件之一，Bootstrap为表格提供了**1种基础样式和4种附加样式**以及**1个支持响应式的表格**。在使用Bootstrap的表格过程中，只需要添加对应的类名就可以得到不同的表格风格

* .table：基础表格
* .table-striped：斑马线表格
* .table-bordered：带边框的表格
* .table-hover：鼠标悬停高亮的表格
* .table-condensed：紧凑型表格
* .table-responsive：响应式表格

Bootstrap还为表格的行元素&lt;tr&gt;提供了五种不同的类名，每种类名控制了行的不同背景颜色，具体说明如下表所示

|类名|描述|对应颜色|
|:--:|:--|:--:|
|.active|表示当前活动的信息|#f5f5f5|
|.success|表示成功或者正确的行为|#dff0d8|
|.info|表示中立的信息或行为|#d9edf7|
|.warning|表示警告，需要特别注意|#fcf8e3|
|.danger|表示危险或者可能是错误的行为|#f2dede|

其使用非常的简单，只需要在<tr>元素中添加上表对应的类名，就能达到你自己需要的效果：
```html
<table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th>类名</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <td>.active</td>
      <td>表示当前活动的信息</td>
    </tr>
    <tr class="success">
      <td>.success</td>
      <td>表示成功或者正确的行为</td>
    </tr>
    <tr class="info">
      <td>.info</td>
      <td>表示中立的信息或行为</td>
    </tr>
    <tr class="warning">
      <td>.warning</td>
      <td>表示警告，需要特别注意</td>
    </tr>
    <tr class="danger">
      <td>.danger</td>
      <td>表示危险或者可能是错误的行为</td>
    </tr>
  </tbody>
</table>
```

### 基础表格
.table”主要有三个作用：
* 给表格设置了margin-bottom:20px以及设置单元内距
* 在thead底部设置了一个2px的浅灰实线
* 每个单元格顶部设置了一个1px的浅灰实线

### 斑马线表格
在Bootstrap中实现这种表格效果并不困难，只需要在&lt;table class="table"&gt;的基础上增加类名“.table-striped”即可

### 带边框的表格
基础表格仅让表格部分地方有边框，但有时候需要整个表格具有边框效果。Bootstrap出于实际运用，也考虑这种表格效果，即所有单元格具有一条1px的边框

Bootstrap中带边框的表格使用方法和斑马线表格的使用方法类似，只需要在基础表格&lt;table class="table"&gt;基础上添加一个“.table-bordered”类名即可

### 鼠标悬浮高亮的表格
当鼠标悬停在表格的行上面有一个高亮的背景色，这样的表格让人看起来就是舒服，时刻告诉用户正在阅读表格哪一行的数据。Bootstrap的确没有让你失望，他也考虑到这种效果，其提供了一个“.table-hover”类名来实现这种表格效果

鼠标悬停高亮的表格使用也简单，仅需要&lt;table class="table"&gt;元素上添加类名“table-hover”即可

### 紧凑型表格
何谓紧凑型表格，简单理解，就是单元格没内距或者内距较其他表格的内距更小。换句话说，要实现紧凑型表格只需要重置表格单元格的内距padding的值。那么在Bootstrap中，通过类名“table-condensed”重置了单元格内距值

紧凑型表格的运用，也只是需要在&lt;table class="table"&gt;基础上添加类名“table-condensed”

### 响应式表格
随着各种手持设备的出现，要想让你的Web页面适合千罗万像的设备浏览，响应式设计的呼声越来越高。在Bootstrap中也为表格提供了响应式的效果，将其称为响应式表格

Bootstrap提供了一个容器，并且此容器设置类名“.table-responsive”,此容器就具有响应式效果，然后将&lt;table class="table"&gt;置于这个容器当中，这样表格也就具有响应式效果

Bootstrap中响应式表格效果表现为：当你的浏览器可视区域小于768px时，表格底部会出现水平滚动条。当你的浏览器可视区域大于768px时，表格底部水平滚动条就会消失

## 表单

### 基础表单
表单主要功能是用来与用户做交流的一个网页控件，良好的表单设计能够让网页与用户更好的沟通。表单中常见的元素主要包括：**文本输入框**、**下拉选择框**、**单选按钮**、**复选按钮**、**文本域和**按钮**等。其中每个控件所起的作用都各不相同，而且不同的浏览器对表单控件渲染的风格都各有不同

**form-control类:**

* 宽度变成了100%
* 设置了一个浅灰色（#ccc）的边框
* 具有4px的圆角
* 设置阴影效果，并且元素得到焦点之时，阴影和边框效果会有所变化
* 设置了placeholder的颜色为#999

```html
<div style='width:300px;'>
<form role="form">
  <div class="form-group">
    <label for="exampleInputEmail1">邮箱：</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入您的邮箱地址">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入您的邮箱密码">
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> 记住密码
    </label>
  </div>
  <button type="submit" class="btn btn-default">进入邮箱</button>
</form>
</div>
```

### 水平表单
Bootstrap框架默认的表单是垂直显示风格，但很多时候我们需要的水平表单风格（*标签居左*，*表单控件居右*）见下图

在Bootstrap框架中要实现水平表单效果，必须满足以下两个条件

* 在&lt;form&gt;元素是使用类名“form-horizontal”
* 配合Bootstrap框架的网格系统

在&lt;form&gt;元素上使用类名“form-horizontal”主要有以下几个作用
* 设置表单控件padding和margin值
* 改变“form-group”的表现形式，类似于网格系统的“row”

### 内联表单
在Bootstrap框架中实现这样的表单效果是轻而易举的，你只需要在&lt;form&gt;元素中添加类名“form-inline”即可

内联表单实现原理非常简单，欲将表单控件在一行显示，就需要将表单控件设置成内联块元素（display:inline-block）

如果你要在input前面添加一个label标签时，会导致input换行显示。如果你必须添加这样的一个label标签，并且不想让input换行，你需要将label标签也放在容器“form-group”中

### 表单控件(输入框input)
单行输入框，常见的文本输入框，也就是input的type属性值为text。在Bootstrap中使用input时也必须添加type类型，如果没有指定type类型，将无法得到正确的样式，因为Bootstrap框架都是通过input[type=“?”](其中?号代表type类型，比如说text类型，对应的是input[type=“text”])的形式来定义样式的

为了让控件在各种表单风格中样式不出错，需要添加类名“form-control”

### 表单控件(下拉选择框select)
Bootstrap框架中的下拉选择框使用和原始的一致，多行选择设置multiple属性的值为multiple。Bootstrap框架会为这些元素提供统一的样式风格
```html
<form role='form'>
	<div class='form-group'>
		<select class='form-control'>
			<option>太原</option>
			<option>大同</option>
			<option>长治</option>
			<option>吕梁</option>
		</select>
	</div>
	<div class='form-group'>
		<select multiple class='form-control'>
			<option>太原</option>
			<option>大同</option>
			<option>长治</option>
			<option>吕梁</option>
		</select>
	</div>
</form>
```

### 表单控件(文本域textarea)
文本域和原始使用方法一样，设置rows可定义其高度，设置cols可以设置其宽度。但如果textarea元素中添加了类名“form-control”类名，则无需设置cols属性。因为Bootstrap框架中的“form-control”样式的表单控件宽度为100%或auto
```html
<div class="form-group">
	<textarea class="form-control" rows="3"></textarea>
</div>
```

### 表单控件(复选框checkbox和单选择按钮radio)

Bootstrap框架中checkbox和radio有点特殊，Bootstrap针对他们做了一些特殊化处理，主要是checkbox和radio与label标签配合使用会出现一些小问题（最头痛的是对齐问题）。使用Bootstrap框架，开发人员无需考虑太多，只需要按照下面的方法使用即可
```html
<form role="form">
	<div class="checkbox">
		<label>
			<input type="checkbox" value="">
			记住密码
		</label>
	</div>
	<div class="radio">
		<label>
			<input type="radio" name="optionsRadios" id="optionsRadios1" value="love" checked>
			喜欢
		</label>
	</div>
	<div class="radio">
		<label>
			<input type="radio" name="optionsRadios" id="optionsRadios2" value="hate">
			不喜欢
		</label>
	</div>
</form>
```

### 表单控件(复选框和单选按钮水平排列)
有时候，为了布局的需要，将复选框和单选按钮需要水平排列

* 如果checkbox需要水平排列，只需要在label标签上添加类名“checkbox-inline”
* 如果radio需要水平排列，只需要在label标签上添加类名“radio-inline”

```html
<form role='form'>
    <div class='form-group'>
        <label class='radio-inline'>
            <input type='radio' name='sex' value='nan'>
            男性
        </label>
        <label class='radio-inline'>
            <input type='radio' name='sex' value='nv'>
            女性
        </label>
        <label class='radio-inline'>
            <input type='radio' name='sex' value='zhong'>
            中性
        </label>
    </div>
	<div class='form-group'>
		<label class='checkbox-inline'>
			<input type='checkbox' name='qx'>足球
		</label>
		<label class='checkbox-inline'>
			<input type='checkbox' name='qx'>篮球
		</label>
		<label class='checkbox-inline'>
			<input type='checkbox' name='qx'>羽毛球
		</label>
	</div>
</form>
```

### 表单控件(按钮)
按钮也是表单重要控件之一,制作按钮通常使用下面代码来实现
```html
<button class='btn' href='#'>默认</button>
<button class='btn btn-primary' href='#'>primary</button>
<button class='btn btn-info' href='#'>info</button>
<button class='btn btn-success' href='#'>success</button>
<button class='btn btn-warning' href='#'>warning</button>
<button class='btn btn-danger' href='#'>danger</button>
<button class='btn btn-inverse' href='#'>inverse</button>
```

### 表单控件大小
前面看到的表单控件都正常的大小。可以通过设置控件的height，line-height，padding和font-size等属性来实现控件的高度设置。不过Bootstrap框架还提供了两个不同的类名，用来控制表单控件的高度。这两个类名是

* input-sm:让控件比正常大小更小
* input-lg:让控件比正常大小更大

### 表单控件状态(焦点状态)
每一种状态都能给用户传递不同的信息，比如表单有焦点的状态可以告诉用户可以输入或选择东西，禁用状态可以告诉用户不可以输入或选择东西，还有就是表单控件验证状态，可以告诉用户的操作是否正确等

焦点状态是通过伪类“:focus”来实现。Bootstrap框架中表单控件的焦点状态删除了outline的默认样式，重新添加阴影效果

### 表单控件状态(禁用状态)
Bootstrap框架的表单控件的禁用状态和普通的表单禁用状态实现方法是一样的，在相应的表单控件上添加属性“disabled”

### 表单控件状态(验证状态)
在制作表单时，不免要做表单验证。同样也需要提供验证状态样式，在Bootstrap框架中同样提供这几种效果

* .has-warning:警告状态（黄色）
* .has-error：错误状态（红色）
* .has-success：成功状态（绿色）

### 表单提示信息
平常在制作表单验证时，要提供不同的提示信息。在Bootstrap框架中也提供了这样的效果。使用了一个"help-block"样式，将提示信息以块状显示，并且显示在控件底部。

### 按钮
```html
<button class="btn" type="button">基础按钮.btn</button>  
<button class="btn btn-default" type="button">默认按钮.btn-default</button> 
<button class="btn btn-primary" type="button">主要按钮.btn-primary</button> 
<button class="btn btn-success" type="button">成功按钮.btn-success</button> 
<button class="btn btn-info" type="button">信息按钮.btn-info</button> 
<button class="btn btn-warning" type="button">警告按钮.btn-warning</button> 
<button class="btn btn-danger" type="button">危险按钮.btn-danger</button> 
<button class="btn btn-link" type="button">链接按钮.btn-link</button>
```

### 基本按钮
通过类名“btn”来实现
```html
<button class="btn" type="button">我是一个基本按钮</button>
```

### 默认按钮
Bootstrap框架首先通过基础类名“.btn”定义了一个基础的按钮风格，然后通过“.btn-default”定义了一个默认的按钮风格。默认按钮的风格就是在基础按钮的风格的基础上修改了按钮的背景颜色、边框颜色和文本颜色。

### 多标签支持
一般制作按钮除了使用&lt;button&gt;标签元素之外，还可以使用&lt;input type="submit"&gt;和&lt;a&gt;标签等。同样，在Bootstrap框架中制作按钮时，除了刚才所说的这些标签元素之外，还可以使用在其他的标签元素上，唯一需要注意的是，要在制作按钮的标签元素上添加类名“btn”。如果不添加是不会有任何按钮效果

```html
<a class='btn btn-default'>a标签的默认按钮</a>
<input type='submit' class='btn btn-default' value='submit按钮'/>
```

### 按钮大小
上一节介绍了按钮的定制风格，也就是如何实现Web页面中多种风格按钮。在Bootstrap框架中，对于按钮的大小，也是可以定制的。类似于input一样，通过在基础按钮“.btn”的基础上追加类名来控制按钮的大小。

* btn-lg 变大
* btn 正常
* btn-sm 变小
* btn-xs 超小

```html
<button class="btn btn-default btn-lg" type="button">变大的默认按钮</button>
<button class="btn btn-default" type="button">默认大小的按钮</button>
<button class="btn btn-default btn-sm" type="button">变小的默认按钮</button>
<button class="btn btn-default btn-xs" type="button">超小的默认按钮</button>
```

### 块状按钮
Bootstrap框架中提供了一个类名“btn-block”。按钮使用这个类名就可以让按钮充满整个容器，并且这个按钮不会有任何的padding和margin值。在实际当中，常把这种按钮称为块状按钮

### 按钮状态——活动状态
Bootstrap框架针对按钮的状态做了一些特殊处理。在Bootstrap框架中针对按钮的状态效果主要分为两种：活动状态和禁用状态

Bootstrap按钮的活动状态主要包括按钮的悬浮状态(:hover)，点击状态(:active)和焦点状态（:focus）几种

### 按钮状态——禁用状态
方法1：在标签中添加disabled属性

方法2：在元素标签中添加类名“disabled”

### 图标
Bootstrap框架中的图标都是字体图标，其实现原理就是通过@font-face属性加载了字体

在网页中使用图标也非常的简单，在任何内联元素上应用所对应的样式即可

## 网格系统
网格系统的实现原理非常简单，仅仅是通过定义容器大小，平分12份(也有平分成24份或32份，但12份是最常见的)，再调整内外边距，最后结合媒体查询，就制作出了强大的响应式网格系统。Bootstrap框架中的网格系统就是将容器平分成12份

### 实现原理
1. 数据行(.row)必须包含在容器（.container）中，以便为其赋予合适的对齐方式和内距(padding)
2. 在行(.row)中可以添加列(.column)，但列数之和不能超过平分的总列数，比如12
3. 具体内容应当放置在列容器（column）之内，而且只有列（column）才可以作为行容器(.row)的直接子元素
4. 通过设置内距（padding）从而创建列与列之间的间距。然后通过为第一列和最后一列设置负值的外距（margin）来抵消内距(padding)的影响

### 基本用法
网格系统用来布局，其实就是列的组合。Bootstrap框架的网格系统中有四种基本的用法

#### 列组合
列组合简单理解就是更改数字来合并列（原则：列总和数不能超12），有点类似于表格的colspan属性
```html
<div class="container">
	<div class='row'>
		<div class='col-md-4'>row1 .col-md-4</div>
		<div class='col-md-4'>row1 .col-md-4</div>
		<div class='col-md-4'>row1 .col-md-4</div>
	</div>
	<div class='row'>
		<div class='col-md-6'>row2 .col-md-6</div>
		<div class='col-md-6'>row2 .col-md-6</div>
	</div>
	<div class='row'>
		<div class='col-md-2'>row3 .col-md-2</div>
		<div class='col-md-2'>row3 .col-md-2</div>
		<div class='col-md-2'>row3 .col-md-2</div>
		<div class='col-md-2'>row3 .col-md-2</div>
		<div class='col-md-2'>row3 .col-md-2</div>
		<div class='col-md-2'>row3 .col-md-2</div>
	</div>
	<div class='row'>
		<div class='col-md-12'>row4 .col-md-12</div>
	</div>
	<div class='row'>
		<div class='col-md-3'>row4 .col-md-3</div>
		<div class='col-md-9'>row4 .col-md-9</div>
	</div>
</div>
```

#### 列偏移
有的时候，我们不希望相邻的两个列紧靠在一起，但又不想使用margin或者其他的技术手段来。这个时候就可以使用列偏移（offset）功能来实现。使用列偏移也非常简单，只需要在列元素上添加类名“col-md-offset-*”(其中星号代表要偏移的列组合数)，那么具有这个类名的列就会向右偏移。例如，你在列元素上添加“col-md-offset-4”，表示该列向右移动4个列的宽度

```html
<div class="container">
    <div class="row">
        <div class="col-md-2">.col-md-2</div>
        <div class="col-md-2 col-md-offset-1">.col-md-2 --1</div>
        <div class='col-md-2 col-md-offset-1'>.col-md-2 --1</div>
        <div class='col-md-3 col-md-offset-1'>.col-md-3 --1</div>
	</div>
</div>
```

#### 列排序
列排序其实就是改变列的方向，就是改变左右浮动，并且设置浮动的距离。在Bootstrap框架的网格系统中是通过添加类名“col-md-push-*”和“col-md-pull-*” (其中星号代表移动的列组合数)
```html
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-8">.col-md-8</div>
  </div>
  <div class="row">
    <div class="col-md-4 col-md-push-8">.col-md-4</div>
    <div class="col-md-8 col-md-pull-4">.col-md-8</div>
  </div>
</div>
```

#### 列的嵌套
Bootstrap框架的网格系统还支持列的嵌套。你可以在一个列中添加一个或者多个行（row）容器，然后在这个行容器中插入列（像前面介绍的一样使用列）。但在列容器中的行容器（row），宽度为100%时，就是当前外部列的宽度
```html
<div class="container">
    <div class="row">
        <div class="col-md-8">.col-md-8
            <div class="row">
                <div class="col-md-8">col-md-8</div>
                <div class="col-md-4">col-md-4</div>
            </div>
        </div>
        <div class="col-md-4">.col-md-4
            <div class="row">
                <div class="col-md-9">col-md-9</div>
                <div class="col-md-3">col-md-3</div>
            </div>
        </div>
    </div>
</div>
```

## 菜单、按钮及导航
### 下拉菜单
* 使用一个名为“dropdown”的容器包裹了整个下拉菜单元素：&lt;div class='dropdown'&gt;&lt;/div&gt;
* 使用了一个&lt;button&gt;按钮做为父菜单，并且定义类名“dropdown-toggle”和自定义“data-toggle”属性，且值必须和最外容器类名一致，此示例为: data-toggle='dropdown'
* 下拉菜单项使用一个ul列表，并且定义一个类名为“dropdown-menu”，此示例为:&lt;ul class='dropdown-menu'&gt;

```html
<div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" id="shuiguo" data-toggle="dropdown">
        选中你喜欢的水果
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="shuiguo">
		<li ><a href='#'>苹果</a></li>
		<li ><a href='#'>香蕉</a></li>
		<li ><a href='#'>梨</a></li>
		<li ><a href='#'>桃</a></li>
    </ul>
</div>
```

#### 下拉菜单（下拉分隔线）
在Bootstrap框架中的下拉菜单还提供了下拉分隔线，假设下拉菜单有两个组，那么组与组之间可以通过添加一个空的<li>，并且给这个<li>添加类名“divider”来实现添加下拉分隔线的功能
```html
<div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" id="shuiguo" data-toggle="dropdown">
        选中你喜欢的水果
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="shuiguo">
		<li ><a href='#'>苹果</a></li>
		<li ><a href='#'>香蕉</a></li>
		<li class='divider'></li>
		<li ><a href='#'>梨</a></li>
		<li ><a href='#'>桃</a></li>
    </ul>
</div>
<div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-togglt" id="shiwu" data-toggle="dropdown">
        食物
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="shiwu">
		<li><a href='#'>苹果</a></li>
		<li><a href='#'>香蕉</a></li>
		<li><a href='#'>梨</a></li>
		<li><a href='#'>桃</a></li>
		<li class='divider'></li>
		<li><a href='#'>芹菜</a></li>
		<li><a href='#'>萝卜</a></li>
		<li><a href='#'>茄子</a></li>
		<li class='divider'></li>
		<li><a href='#'>米饭</a></li>
		<li><a href='#'>馒头</a></li>
		<li><a href='#'>面条</a></li>
    </ul>
</div>
```

#### 下拉菜单（菜单标题）
为了让这个分组更明显，还可以给每个组添加一个头部（标题）
```html
<div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-togglt" id="shiwu" data-toggle="dropdown">
        食物
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="shiwu">
		<li class='dropdown-header'>水果</li>
		<li><a href='#'>苹果</a></li>
		<li><a href='#'>香蕉</a></li>
		<li><a href='#'>梨</a></li>
		<li><a href='#'>桃</a></li>
		<li class='divider'></li>
		<li class='dropdown-header'>蔬菜</li>
		<li><a href='#'>芹菜</a></li>
		<li><a href='#'>萝卜</a></li>
		<li><a href='#'>茄子</a></li>
		<li class='divider'></li>
		<li class='dropdown-header'>主食</li>
		<li><a href='#'>米饭</a></li>
		<li><a href='#'>馒头</a></li>
		<li><a href='#'>面条</a></li>
    </ul>
</div>
```

#### 下拉菜单（对齐方式）
Bootstrap框架中下拉菜单默认是左对齐，如果你想让下拉菜单相对于父容器右对齐时，可以在“dropdown-menu”上添加一个“pull-right”或者“dropdown-menu-right”类名
```html
<div class="dropdown" style="width:320px;">
    <button type="button" class="btn btn-primary dropdown-togglt btn-block" id="shiwu" data-toggle="dropdown">
        食物
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="shiwu">
		<li class='dropdown-header'>水果</li>
		<li><a href='#'>苹果</a></li>
		<li><a href='#'>香蕉</a></li>
		<li><a href='#'>梨</a></li>
		<li><a href='#'>桃</a></li>
		<li class='divider'></li>
		<li class='dropdown-header'>蔬菜</li>
		<li><a href='#'>芹菜</a></li>
		<li><a href='#'>萝卜</a></li>
		<li><a href='#'>茄子</a></li>
		<li class='divider'></li>
		<li class='dropdown-header'>主食</li>
		<li><a href='#'>米饭</a></li>
		<li><a href='#'>馒头</a></li>
		<li><a href='#'>面条</a></li>
    </ul>
</div>
```

#### 下拉菜单（菜单项状态）
下拉菜单项的默认的状态（不用设置）有悬浮状态（:hover）和焦点状态（:focus）

还有当前状态（.active）和禁用状态（.disabled）。这两种状态使用方法只需要在对应的菜单项上添加对应的类名
```html
<div class="dropdown" style="width:320px;">
    <button type="button" class="btn btn-primary dropdown-togglt btn-block" id="shiwu" data-toggle="dropdown">
        食物
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="shiwu">
		<li class='dropdown-header'>水果</li>
		<li><a href='#'>苹果</a></li>
		<li><a href='#'>香蕉</a></li>
		<li><a href='#'>梨</a></li>
		<li><a href='#'>桃</a></li>
		<li class='divider'></li>
		<li class='dropdown-header'>蔬菜</li>
		<li><a href='#'>芹菜</a></li>
		<li class='disabled'><a href='#'>萝卜</a></li>
		<li><a href='#'>茄子</a></li>
		<li class='divider'></li>
		<li class='dropdown-header'>主食</li>
		<li class='active'><a href='#'>米饭</a></li>
		<li><a href='#'>馒头</a></li>
		<li><a href='#'>面条</a></li>
    </ul>
</div>
```

### 按钮
#### 按钮组
单个按钮在Web页面中的运用有时候并不能满足我们的业务需求，常常会看到将多个按钮组合在一起使用，比如富文本编辑器里的一组小图标按钮等

使用一个名为“btn-group”的容器，把多个按钮放到这个容器中

除了可以使用&lt;button&gt;元素之外，还可以使用其他标签元素，比如<a>标签。唯一要保证的是：不管使用什么标签，“.btn-group”容器里的标签元素需要带有类名“.btn”

```html
<!DOCTYPE html>
<html>
<head>
	<title>button group</title>
	<meta charset='utf-8' />
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<link href='http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'>
</head>
<body>
<div class="btn-group">
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-step-backward"></span></button>
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-fast-backward"></span></button>
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-backward"></span></button>
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-play"></span></button>
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-pause"></span></button>
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-stop"></span></button>
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-forward "></span></button>
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-fast-forward"></span></button>
    <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-step-forward"></span></button>
</div>
<div class='btn-group'>
	<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-search'></span></button>
	<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-zoom-in'></span></button>
	<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-zoom-out'></span></button>
	<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-upload'></span></button>
	<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-download'></span></button>
</div>
<script src='http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js'></script>
<script src='http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>
```

#### 按钮工具栏
将按钮组“btn-group”按组放在一个大的容器“btn-toolbar”中

**按钮组大小设置**

* .btn-group-lg 大按钮组
* .btn-group-sm 小按钮组
* .btn-group-xs 超小按钮组

```html
<div class='btn-toolbar'>
	<div class='btn-group btn-group-lg'>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-align-left'></span></button>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-align-center'></span></button>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-align-right'></span></button>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-align-justify'></span></button>
	</div>
	<div class='btn-group'>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-indent-left'></span></button>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-indent-right'></span></button>
	</div>
	<div class='btn-group btn-group-sm'>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-font'></span></button>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-bold'></span></button>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-italic'></span></button>
	</div>
	<div class='btn-group btn-group-xs'>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-text-height'></span></button>
		<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-text-width'></span></button>
	</div>
</div>
```

#### 嵌套分组
只需要把当初制作下拉菜单的“dropdown”的容器换成“btn-group”，并且和普通的按钮放在同一级

```html
<div class='btn-group'>
	<button type='button' class='btn btn-default'>首页</button>
	<div class='btn-group'>
		<button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>
			产品展示
			<span class='caret'></span>
		</button>
		<ul class='dropdown-menu'>
			<li><a href='#'>收割机</a></li>
			<li><a href='#'>电动机</a></li>
			<li><a href='#'>拖拉机</a></li>
			<li><a href='#'>电动车</a></li>
		</ul>
	</div>
	<button type='button' class='btn btn-default'>案例分析</button>
	<button type='button' class='btn btn-default'>联系我们</button>
	<button type='button' class='btn btn-default'>关于我们</button>
</div>
```

#### 垂直分组
前面看到的示例，按钮组都是水平显示的。但在实际运用当中，总会碰到垂直显示的效果。在Bootstrap框架中也提供了这样的风格。我们只需要把水平分组的“btn-group”类名换成“btn-group-vertical”即可

```html
<div class='btn-group-vertical'>
	<button type='button' class='btn btn-default'>首页</button>
	<div class='btn-group'>
		<button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>
			产品展示
			<span class='caret'></span>
		</button>
		<ul class='dropdown-menu'>
			<li><a href='#'>收割机</a></li>
			<li><a href='#'>电动机</a></li>
			<li><a href='#'>拖拉机</a></li>
			<li><a href='#'>电动车</a></li>
		</ul>
	</div>
	<button type='button' class='btn btn-default'>案例分析</button>
	<button type='button' class='btn btn-default'>联系我们</button>
	<button type='button' class='btn btn-default'>关于我们</button>
</div>
```

#### 等分按钮
等分按钮的效果在移动端上特别的实用。整个按钮组宽度是容器的100%，而按钮组里面的每个按钮平分整个容器宽度。例如，如果你按钮组里面有五个按钮，那么每个按钮是20%的宽度，如果有四个按钮，那么每个按钮是25%宽度，以此类推。

等分按钮也常被称为是自适应分组按钮，其实现方法也非常的简单，只需要在按钮组“btn-group”上追加一个“btn-group-justified”类名

```html
<div class='btn-wrap'>
	<div class='btn-group btn-group-justified'>
		<a class='btn btn-default' href='#'>首页</a>
		<a class='btn btn-default' href='#'>产品展示</a>
		<a class='btn btn-default' href='#'>案例分析</a>
		<a class='btn btn-default' href='#'>新闻中心</a>
		<a class='btn btn-default' href='#'>商务平台</a>
		<a class='btn btn-default' href='#'>服务平台</a>
	</div>
</div>
```

#### 向上弹起的下拉菜单
有些菜单是需要向上弹出的，比如说你的菜单在页面最底部，而这个菜单正好有一个下拉菜单，为了让用户有更好的体验，不得不让下拉菜单向上弹出。在Bootstrap框架中专门为这种效果提代了一个类名“dropup”。使用方法正如前面所示，只需要在“btn-group”上添加这个类名（当然，如果是普通向上弹出下拉菜单，你只需要在“dropdown”类名基础上追加“dropup”类名即可）

```html
<div class="btn-wrap">
    <div class="btn-group btn-group-justified">
		<a class="btn btn-default" href="#">首页</a>
		<a class="btn btn-default" href="#">产品展示</a>
		<a class="btn btn-default" href="#">产品展示</a>
		<a class="btn btn-default" href="#">案例分析</a>
		<!-- 
		<a class="btn btn-default" href="#">联系我们</a>
		-->
		<div class='btn-group dropup'>
			<a class='btn btn-default dropdown-toggle' data-toggle='dropdown'>
				联系我们
				<span class='caret'></span>
			</a>
			<ul class='dropdown-menu'>
				<li><a href='#'>收割机</a></li>
				<li><a href='#'>电动机</a></li>
				<li><a href='#'>拖拉机</a></li>
				<li><a href='#'>电动车</a></li>
			</ul>
		</div>
	</div>
</div>
```


### 导航

#### 基础样式
Bootstrap框架中制作导航条主要通过“.nav”样式。默认的“.nav”样式不提供默认的导航样式，必须附加另外一个样式才会有效，比如“nav-tabs”、“nav-pills”之类。比如右侧代码编辑器中就有一个tab导航条的例子，他的实现方法就是为ul标签加入.nav和nav-tabs两个类样式

```html
<ul class="nav nav-tabs">
    <li><a href="##">Home</a></li>
    <li><a href="##">CSS3</a></li>
 	<li><a href="##">Sass</a></li>
 	<li><a href="##">jQuery</a></li>
 	<li><a href="##">Responsive</a></li>
</ul>
<br><br>
<ul class="nav nav-pills">
    <li><a href="##">Home</a></li>
    <li><a href="##">CSS3</a></li>
 	<li><a href="##">Sass</a></li>
 	<li><a href="##">jQuery</a></li>
 	<li><a href="##">Responsive</a></li>
</ul>
```

#### 标签形tab导航
标签形导航，也称为选项卡导航。特别是在很多内容分块显示的时，使用这种选项卡来分组十分适合。

标签形导航是通过“nav-tabs”样式来实现。在制作标签形导航时需要在原导航“nav”上追加此类名

```html
<ul class="nav nav-tabs">
    <li><a href="##">Home</a></li>
    <li><a href="##">CSS3</a></li>
 	<li><a href="##">Sass</a></li>
 	<li><a href="##">jQuery</a></li>
 	<li><a href="##">Responsive</a></li>
</ul>
```

一般情况之下，选项卡教会有一个当前选中项。其实在Bootstrap框架也相应提供了。假设我们想让“Home”项为当前选中项，只需要在其标签上添加类名“class="active"”即可
```html
<ul class="nav nav-tabs">
    <li><a href="##">Home</a></li>
    <li class='active'><a href="##">CSS3</a></li>
 	<li><a href="##">Sass</a></li>
 	<li><a href="##">jQuery</a></li>
 	<li><a href="##">Responsive</a></li>
</ul>
```

除了当前项之外，有的选项卡还带有禁用状态，实现这样的效果，只需要在标签项上添加“class="disabled"”即可
```html
<ul class="nav nav-tabs">
    <li><a href="##">Home</a></li>
    <li class='active'><a href="##">CSS3</a></li>
 	<li><a href="##">Sass</a></li>
 	<li class='disabled'><a href="##">jQuery</a></li>
 	<li><a href="##">Responsive</a></li>
</ul>
```

#### 胶囊形(pills)导航
胶囊形（pills）导航听起来有点别扭，因为其外形看起来有点像胶囊形状。但其更像我们平时看到的大众形导航。当前项高亮显示，并带有圆角效果。其实现方法和“nav-tabs”类似，同样的结构，只需要把类名“nav-tabs”换成“nav-pills”即可
```html
<ul class="nav nav-pills">
    <li><a href="##">Home</a></li>
    <li class='active'><a href="##">CSS3</a></li>
 	<li><a href="##">Sass</a></li>
 	<li class='disabled'><a href="##">jQuery</a></li>
 	<li><a href="##">Responsive</a></li>
</ul>
```

#### 垂直堆叠的导航
在实际运用当中，除了水平导航之外，还有垂直导航，就类似前面介绍的垂直排列按钮一样。制作垂直堆叠导航只需要在“nav-pills”的基础上添加一个“nav-stacked”类名即可
```html
<ul class="nav nav-pills nav-stacked">
    <li><a href="##">Home</a></li>
    <li class='active'><a href="##">CSS3</a></li>
 	<li><a href="##">Sass</a></li>
 	<li class='disabled'><a href="##">jQuery</a></li>
 	<li><a href="##">Responsive</a></li>
</ul>
```

#### 自适应导航
自适应导航指的是导航占据容器全部宽度，而且菜单项可以像表格的单元格一样自适应宽度。自适应导航和前面使用“btn-group-justified”制作的自适应按钮组是一样的。只不过在制作自适应导航时更换了另一个类名“nav-justified”。当然他需要和“nav-tabs”或者“nav-pills”配合在一起使用

#### 导航加下拉菜单（二级导航）
前面介绍的都是使用Bootstrap框架制作一级导航，但很多时候，在Web页面中是离不开二级导航的效果。那么在Bootstrap框架中制作二级导航就更容易了。只需要将li当作父容器，使用类名“dropdown”，同时在li中嵌套另一个列表ul，使用前面介绍下拉菜单的方法就可以
```html
<ul class='nav nav-tabs'>
	<li class='active'><a href='#'>首页</a></li>
	<li class='dropdown'>
		<a href='#' class='dropdown-toggle' data-toggle='dropdown'>
			教程
			<span class='caret'></span>
		</a>
		<ul class='dropdown-menu'>
			<li><a href='#'>CSS3</a></li>
			<li><a href='#'>Sass</a></li>
			<li class='nav-divider'></li>
			<li><a href='#'>jQuery</a></li>
			<li><a href='#'>Responsive</a></li>
		</ul>
	</li>
	<li><a href='#'>关于我们</a></li>
</ul>
```

## 导航条、分页导航
### 基础导航条
在Bootstrap框中，导航条和导航从外观上差别不是太多，但在实际使用中导航条要比导航复杂得多

1. 首先在制作导航的列表(&lt;ul class=”nav”&gt;)基础上添加类名“navbar-nav”
2. 在列表外部添加一个容器（div），并且使用类名“navbar”和“navbar-default”

```html
<div class='navbar navbar-default'>
	<ul class='nav navbar-nav'>
		<li><a href='#'>网站首页</a></li>
		<li class='active'><a href='#'>系列教程</a></li>
		<li><a href='#'>名师介绍</a></li>
		<li><a href='#'>成功案例</a></li>
		<li><a href='#'>关于我们</a></li>
	</ul>
</div>
```

### 为导航条添加标题、二级菜单及状态
**加入导航条标题**

在Web页面制作中，常常在菜单前面都会有一个标题（文字字号比其它文字稍大一些），其实在Bootstrap框架也为大家做了这方面考虑，其通过“navbar-header”和“navbar-brand”来实现
```html
<div class="navbar navbar-default" role="navigation">
  　<div class="navbar-header">
  　    <a href="##" class="navbar-brand">慕课网</a>
  　</div>
    <ul class="nav navbar-nav">
	   <li class="active"><a href="##">网站首页</a></li>
       <li><a href="##">系列教程</a></li>
       <li><a href="##">名师介绍</a></li>
       <li><a href="##">成功案例</a></li>
       <li><a href="##">关于我们</a></li>
	 </ul>
</div>
```

**导航条状态、二级菜单**

同样的，在基础导航条中对菜单提供了当前状态，禁用状态，悬浮状态等效果，而且也可以带有二级菜单的导航条

```html
<div class="navbar navbar-default" role="navigation">
  　<div class="navbar-header">
  　    <a href="##" class="navbar-brand">慕课网</a>
  　</div>
	<ul class="nav navbar-nav">
	 	<li class="active"><a href="##">网站首页</a></li>
        <li class="dropdown">
          <a href="##" data-toggle="dropdown" class="dropdown-toggle">系列教程<span class="caret"></span></a>
          <ul class="dropdown-menu">
        	<li><a href="##">CSS3</a></li>
        	<li class='active'><a href="##">JavaScript</a></li>
        	<li class="disabled"><a href="##">PHP</a></li>
          </ul>
       </li>
       <li><a href="##">名师介绍</a></li>
       <li><a href="##">成功案例</a></li>
       <li><a href="##">关于我们</a></li>
	</ul>
</div>
```

### 带表单的导航条
有的导航条中会带有搜索表单，在Bootstrap框架中提供了一个“navbar-form”，使用方法很简单，在navbar容器中放置一个带有navbar-form类名的表单
```html
<div class='navbar navbar-default'>
	<div class='navbar-header'>
		<a href='#' class='navbar-brand'>慕课网</a>
	</div>
	<ul class='nav navbar-nav'>
		<li><a href='#'>网站首页</a></li>
		<li class='active'><a href='#'>名师简介</a></li>
		<li><a href='#'>成功案例</a></li>
		<li class='dropdown'>
			<a href='#' data-toggle='dropdown' class='dropdown-toggle'>关于我们<span class='caret'></span></a>
			<ul class='dropdown-menu'>
				<li><a href='#'>公司简介</a></li>
				<li><a href='#'>联系我们</a></li>
				<li><a href='#'>客服服务</a></li>
				<li><a href='#'>售后反馈</a></li>
			</ul>
		</li>
	</ul>
	<form action='#' class='navbar-form navbar-right' rol='search'>
		<div class='form-group'>
			<input type='text' class='form-control' placeholder='请输入关键词' />
		</div>
		<button type='submit' class='btn btn-default'>搜索</button>
	</form>
</div>
```

### 固定导航条
很多情况之一，设计师希望导航条固定在浏览器顶部或底部，这种固定式导航条的应用在移动端开发中更为常见。Bootstrap框架提供了两种固定导航条的方式:

* .navbar-fixed-top 导航条固定再浏览器窗口顶部
* .navbar-fixed-bottom  导航条固定再浏览器底部

使用方法很简单，只需要在制作导航条最外部容器navbar上追加对应的类名即可

```html
<div class='navbar navbar-default navbar-fixed-top'>
	<div class='navbar-header'>
		<a href='#' class='navbar-brand'>慕课网</a>
	</div>
	<ul class='nav navbar-nav'>
		<li><a href='#'>网站首页</a></li>
		<li class='active'><a href='#'>名师简介</a></li>
		<li><a href='#'>成功案例</a></li>
		<li class='dropdown'>
			<a href='#' data-toggle='dropdown' class='dropdown-toggle'>关于我们<span class='caret'></span></a>
			<ul class='dropdown-menu'>
				<li><a href='#'>公司简介</a></li>
				<li><a href='#'>联系我们</a></li>
				<li><a href='#'>客服服务</a></li>
				<li><a href='#'>售后反馈</a></li>
			</ul>
		</li>
	</ul>
	<form action='#' class='navbar-form navbar-right' rol='search'>
		<div class='form-group'>
			<input type='text' class='form-control' placeholder='请输入关键词' />
		</div>
		<button type='submit' class='btn btn-default'>搜索</button>
	</form>
</div>
```
从运行效果中大家不难发现，页面主内容顶部和底部都被固定导航条给遮住了。为了避免固定导航条遮盖内容，我们需要在body上做一些处理：
```css
body {
  padding-top: 70px;/*有顶部固定导航条时设置*/
  padding-bottom: 70px;/*有底部固定导航条时设置*/
}
```

### 响应式导航条
```html
<div class="navbar navbar-default" role="navigation">
  <div class="navbar-header">
     　<!-- .navbar-toggle样式用于toggle收缩的内容，即nav-collapse collapse样式所在元素 -->
       <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-responsive-collapse">
         <span class="sr-only">Toggle Navigation</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
       </button>
       <!-- 确保无论是宽屏还是窄屏，navbar-brand都显示 -->
       <a href="##" class="navbar-brand">慕课网</a>
  </div>
  <!-- 屏幕宽度小于768px时，div.navbar-responsive-collapse容器里的内容都会隐藏，显示icon-bar图标，当点击icon-bar图标时，再展开。屏幕大于768px时，默认显示。 -->
  <div class="collapse navbar-collapse navbar-responsive-collapse">
    	<ul class="nav navbar-nav">
      		<li class="active"><a href="##">网站首页</a></li>
      		<li><a href="##">系列教程</a></li>
      		<li><a href="##">名师介绍</a></li>
      		<li><a href="##">成功案例</a></li>
      		<li><a href="##">关于我们</a></li>
	 	</ul>
  </div>
</div>
```

### 反色导航条
反色导航条其实是Bootstrap框架为大家提供的第二种风格的导航条，与默认的导航条相比，使用方法并无区别，只是将navbar-deafult类名换成navbar-inverse。其变化只是导航条的背景色和文本做了修改
```html
<div class='navbar navbar-inverse navbar-fixed-top'>
	<div class='navbar-header'>
		<a href='#' class='navbar-brand'>慕课网</a>
	</div>
	<ul class='nav navbar-nav'>
		<li class='active'><a href='#'>网站首页</a></li>
		<li><a href='#'>系列教程</a></li>
		<li><a href='#'>名师介绍</a></li>
		<li><a href='#'>成功案例</a></li>
		<li><a href='#'>关于我们</a></li>
	</ul>
</div>
```

### 分页导航（带页码的分页导航）
```html
<ul class="pagination pagination-lg">
  <li><a href="#">&laquo;第一页</a></li>
  <li><a href="#">11</a></li>
  <li><a href="#">12</a></li>
  <li class="active"><a href="#">13</a></li>
  <li><a href="#">14</a></li>
  <li><a href="#">15</a></li>
  <li class="disabled"><a href="#">最后一页&raquo;</a></li>
</ul> 
  
<ul class="pagination pagination">
  <li><a href="#">&laquo;第一页</a></li>
  <li><a href="#">11</a></li>
  <li><a href="#">12</a></li>
  <li class="active"><a href="#">13</a></li>
  <li><a href="#">14</a></li>
  <li><a href="#">15</a></li>
  <li class="disabled"><a href="#">最后一页&raquo;</a></li>
</ul>   
<ul class="pagination pagination-sm">
  <li><a href="#">&laquo;第一页</a></li>
  <li><a href="#">11</a></li>
  <li><a href="#">12</a></li>
  <li class="active"><a href="#">13</a></li>
  <li><a href="#">14</a></li>
  <li><a href="#">15</a></li>
  <li class="disabled"><a href="#">最后一页&raquo;</a></li>
</ul>
```
