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
