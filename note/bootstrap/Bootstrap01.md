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

