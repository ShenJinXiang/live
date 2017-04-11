id: 15
title: JavaScript数组
date: 2016-09-10
category: javascript
tags: javascript
description: JavaScript中数组，是程序中很常见的一种数据集合类型，而且本身很灵活强大：JavaScript是无类型的，数组元素可以是任意类型，即同一数组的不同元素可以是不同类型的；数组长度可变，可以根据实际需要增加或删除元素，动态改变数组长度

------
<p>JavaScript中数组，是程序中很常见的一种数据集合类型，而且本身很灵活强大：JavaScript是无类型的，数组元素可以是任意类型，即同一数组的不同元素可以是不同类型的；数组长度可变，可以根据实际需要增加或删除元素，动态改变数组长度。</p>
<h3>创建数组</h3>
<h4>数组直接量</h4>
<p>创建数组最简单的方法，在方括号中将数组元素用逗号隔开即可。</p>
<pre class='line-numbers language-javascript'>
<code>
var empty = []; // 没有元素的数组
var arr1 = [1, 2, 3, 4, 5]; // 创建5个数值的数组
var arr2 = [1, true, 'abcd', 1.1, {x: 1, y: 2}]; // 元素类型不同的数组
</code>
</pre>
<h4>构造函数Array()</h4>
<pre class='line-numbers language-javascript'>
<code>
var arr1 = new Array(); // 类似 直接量 []
var arr2 = new Array(10); // 制定数组长度为10
var arr3 = new Array(5, 4, 2, true, 'test', new Object());
</code>
</pre>
<br><hr><br>
<h3>数组的读写</h3>
<h4>读取数组元素</h4>
<p>使用[]操作符来访问数组中的元素</p>
<pre class='line-numbers language-javascript'>
<code>
var arr1 = ['aa', 'bb', 'cc', 'dd', 'ee'];
console.log(arr1[0]); // aa
console.log(arr1[1]); // bb
console.log(arr1[2]); // cc 
console.log(arr1[3]); // dd
console.log(arr1[4]); // ee
console.log(arr1[5]); // undefined
</code>
</pre>
<h4>写入数组元素</h4>
<p>可以使用[]操作符写入数组元素，类似于对象属性的赋值，不过数组元素赋值时，[]中是数字；数组是对象的特殊形式，只有0~2^32 - 2之间的整数属性才是数组的索引，数组根据需要更新其length属性的值</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [];
arr[0] = 'a';
console.log(arr); // [ 'a' ]
console.log(arr.length); // 1
arr[10] = 'b';
console.log(arr); // [ 'a', , , , , , , , , , 'b' ]
console.log(arr.length); // 11
arr['msg'] = '测试数组'; 
console.log(arr); // [ 'a', , , , , , , , , , 'b', msg: '测试数组' ]
console.log(arr.length); // 11
</code>
</pre>
<br><hr><br>
<h3>数组的长度</h3>
<p>每个数组都由一个length属性来表示其长度，可以获取和设置length的值</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
arr.length = 3;
console.log(arr); // [ 1, 2, 3 ]
arr.length = 0;
console.log(arr); // []
arr.length = 5;
console.log(arr); [ , , , ,  ]
</code>
</pre>
<br><hr><br>
<h3>delete运算符参数数组元素</h3>
<p>可以像删除对象属性一样使用delete运算符来删除数组元素，需要注意的是：1. delete运算符并不改变数组的长度；2. 使用delete运算符删除一个元素，数组将变成稀疏数组</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length); // 6
delete arr[1];
console.log(arr); // [ 1, , 3, 4, 5, 6 ]
console.log(arr.length); // 6
console.log(1 in arr); // false
</code>
</pre>
<br><hr><br>
<h3>稀疏数组</h3>
<p>稀疏数组就是包含从0开始的不连续索引的数组,稀疏数组的length属性大于数组元素的个数</p>
<pre class='line-numbers language-javascript'>
<code>
var arr1 = new Array(5);
console.log(arr1); // [ , , , ,  ]
var arr2 = [];
arr2[10] = 0;
console.log(arr2); // [ , , , , , , , , , , 0 ]
console.log(arr2.length); // 11
console.log(arr2[1]); // undefined
</code>
</pre>
<br><hr><br>
<h3>数组的遍历</h3>
<h4>使用for循环</h4>
<i>常见的循环方式</i>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i &lt; arr.length; i++) {
	// 循环体
}
</code>
</pre>
<br>
<i>对于稀疏数组，要排除null、undefined和不存在的元素</i>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i &lt; arr.length; i++) {
	if(!arr[i]) continue;
	// 循环体
}
</code>
</pre>
<br>
<i>只跳过undefined和不存在的元素</i>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i &lt; arr.length; i++) {
	if(arr[i] === undefined) continue;
	// 循环体
}
</code>
</pre>
<br>
<i>只想跳过不存在的元素，仍要处理存在的undefined元素</i>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i &lt; arr.length; i++) {
	if(!(i in arr)) continue;
	// 循环体
}
</code>
</pre>
<br>
<h4>for/in循环</h4>
<p>使用for/in循环遍历稀疏数组时，可以过滤掉不存在的元素</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
for(var p in arr) {
	// 循环体
}
</code>
</pre>
<br>
<h4>forEach方法</h4>
<p>forEach()方法用于遍历整个数组，接受一个函数，forEach用三个参数来调用这个函数：数组元素、元素的索引、数组本身</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [11, 22, 33, 44, 55, 66];
arr.forEach(function(val, index, a){
	console.log("index:", index, " value:", val);
});
</code>
</pre>
<p>输出结果：</p>
<pre class='line-numbers result-code'>
<code>
index: 0  value: 11
index: 1  value: 22
index: 2  value: 33
index: 3  value: 44
index: 4  value: 55
index: 5  value: 66
</code>
</pre>
<br><hr><br>
<h3>数组常用方法</h3>
<h4>push()方法</h4>
<p>push()方法用于给数组的末尾增加一个或多个元素，更新数组的length属性的值并返回</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [];
console.log(arr.push('aa')); // 1
console.log(arr); // [ 'aa' ]
console.log(arr.length); // 1
console.log(arr.push('bb', 'cc')); // 3
console.log(arr); // [ 'aa', 'bb', 'cc' ]
console.log(arr.length); // 3
console.log(arr.push('dd', ['ee', 'ff'])); // 5
console.log(arr); // [ 'aa', 'bb', 'cc', 'dd', [ 'ee', 'ff' ] ]
console.log(arr.length); // 5
</code>
</pre>
<br>
<h4>pop()方法</h4>
<p>删除末尾的元素，使数组长度减少1，并返回被删除的元素的值</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
console.log(arr.pop()); // 5
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr.length); // 4
</code>
</pre>
<br>
<h4>unshift()方法</h4>
<p>再数组的首部插入一个元素，并将其他元素依次移动到更高的索引位置, 更新数组的length属性值并返回</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [];
console.log(arr.unshift('aa')); // 1
console.log(arr); // [ 'aa' ]
console.log(arr.length); // 1
console.log(arr.unshift('bb', 'cc')); // 3
console.log(arr); // [ 'bb', 'cc', 'aa' ]
console.log(arr.length); // 3
</code>
</pre>
<br>
<h4>shift()方法</h4>
<p>从数组头部删除一个元素，返回删除的元素，将所有元素下移至当前索引低1的位置，更新数组的length属性值</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = ['11', '22', '33', '44', '55'];
console.log(arr.shift()); // 11
console.log(arr); // [ '22', '33', '44', '55' ]
console.log(arr.length); // 4
</code>
</pre>
<br>
<h4>join()方法</h4>
<p>join()方法将数组中所有元素都转化为字符串并链接再一起，返回最后生产的字符串, 可以指定一个可选的字符串在生成的字符串中来分隔数组的各个元素，如果不指定分隔符，默认使用逗号</p>
<p>Array.join()方法是String.split()方法的逆向操作，String.split()方法是将字符串分隔成若干块来创建一个数组</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.join()); // a,b,c,d,e
console.log(arr.join('-')); // a-b-c-d-e
var arr1 = new Array(20);
console.log(arr1.join('-')); // -------------------
</code>
</pre>
<br>
<h4>reverse()方法</h4>
<p>Array.reverse() 方法将数组中的元素颠倒顺序，返回逆序的数组，此方法修改了原数组</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.reverse();
console.log(arr); // [ 5, 4, 3, 2, 1 ]
console.log(arr1); // [ 5, 4, 3, 2, 1 ]
console.log(arr === arr1); // true
</code>
</pre>
<br>
<h4>sort()方法</h4>
<p>Array.sort() 方法将数组中的元素排序并返回排序后的数组。当不带参数调用sort()时，数组元素以字母表顺序排序</p>
<p>如果数组中包含undefined元素，它们会被排到数组的尾部</p>
<p>为了按照其他方式而非字母表顺序进行数组排序，必须给sort() 传递一个比较函数，该函数决定了它的两个参数在排好序的数组中的先后顺序，假设第一个参数应该在后，函数应该返回一个大于0的数值</p>
<i>按照数值大小排序：</i>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1111, 222, 33, 4];
arr.sort();
console.log(arr); // [ 1111, 222, 33, 4 ]
arr.sort(function(x, y) {
    return x - y;
});
console.log(arr); // [ 4, 33, 222, 1111 ]
arr.sort(function(x, y) {
    return y - x;
});
console.log(arr); // [ 1111, 222, 33, 4 ]
</code>
</pre>
<i>忽略大小写排序：</i>
<pre class='line-numbers language-javascript'>
<code>
var arr = ['ant', 'Bug', 'cat', 'Dog'];
arr.sort();
console.log(arr); // [ 'Bug', 'Dog', 'ant', 'cat' ]
arr.sort(function(s, t){
    var s1 = s.toLowerCase();
    var t1 = t.toLowerCase();
    if(s1 &lt; t1) return -1;
    if(s1 &gt; t1) return 1;
    return 0;
});
console.log(arr); // [ 'ant', 'Bug', 'cat', 'Dog' ]
</code>
</pre>
<br>
<h4>concat()方法</h4>
<p>concat() 方法创建并返回一个新数组，它的元素包括调用concat()的原始数组的元素和concat()的没个参数。如果这些参数中的任何一个自身是数组，则连接的是数组的元素，而非数组本身</p>
<p>concat()不会递归遍历数组的数组, 也不会修改修用的数组</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3];
var arr1 = arr.concat(4, 5);
var arr2 = arr.concat([4, 5]);
var arr3 = arr.concat([4, 5], [6, 7]);
var arr4 = arr.concat(4, [5, [6, 7]]);

console.log(arr);  // [ 1, 2, 3 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ]
console.log(arr2); // [ 1, 2, 3, 4, 5 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr4); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
</code>
</pre>
<br>
<h4>slice()方法</h4>
<p>slice()方法返回指定数组的一个片段或子数组。两个参数分别表示数组的开始和结束位置，slice()不会修改调用的数组</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3)); // [ 1, 2, 3 ]
console.log(arr.slice(3)); // [ 4, 5 ]
console.log(arr.slice(1, -1)); // [ 2, 3, 4 ]
console.log(arr.slice(-3, -2)); // [ 3 ]
</code>
</pre>
<br>
<h4>splice()方法</h4>
<p>splice() 方法是数组中插入或删除元素的通用方法，会修改调用的数组；第一个参数指定了删除或修改的起始索引位置；第二个参数指定删除的元素个数，如没有指定，则从起始点到数组结尾所有元素都删除；返回删除掉的元素组成的数组</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.splice(7)); // [ 7, 8, 9 ]
console.log(arr); // [ 0, 1, 2, 3, 4, 5, 6 ]
console.log(arr.splice(2, 2)); // [ 2, 3 ]
console.log(arr); // [ 0, 1, 4, 5, 6 ]
console.log(arr.splice(5)); // []
console.log(arr); // [ 0, 1, 4, 5, 6 ]
</code>
</pre>
<p>splice()中紧随前两个参数后的参数，指定了需要插入到数组中的元素，从起始位置开始插入</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2, 0, 'a', 'b')); // []
console.log(arr); // [ 1, 2, 'a', 'b', 3, 4, 5 ]
console.log(arr.splice(2, 2, [1, 2,], 3)); // [ 'a', 'b' ]
console.log(arr); // [ 1, 2, [ 1, 2 ], 3, 3, 4, 5 ]
</code>
</pre>
<br>
<h4>map()方法</h4>
<p>map() 方法将调用数组的每个函数传递给指定的函数，并返回一个数组，包含该函数的返回值</p>
<ul>
<li>传递给map方法的函数应该有返回值</li>
<li>map() 方法不会改变调用数组，而是返回一个新数组</li>
<li>如果是稀疏数组，那么返回的也是同样长度的数组，同样的长度，同样的缺失元素</li>
</ul>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr1 = arr.map(function(val){
    return val * val;
});

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr1); // [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
</code>
</pre>
<br>
<h4>filter()方法</h4>
<p>filter() 方法返回的数组元素是调用的数组的一个子集。如果调用的函数返回true或能转换成true的值，那么判定为这个数组的成员</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = arr.filter(function(val){
    return val % 2 == 0;
});

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr2); // [ 2, 4, 6, 8 ]
</code>
</pre>
<p>filter() 会跳过稀疏数组中的缺失元素，返回的数组总是稠密的</p>
<pre class='line-numbers language-javascript'>
<code>
// 压缩稀疏数组的缺失元素
var dense = sparse.filter(function(){
	return true;
});

// 压缩缺失，且删除undefined和null元素
a = a.filter(function(x){
	return x !== null && x !== undefined;
});
</code>
</pre>
<br>
<h4>every() 和 some()方法</h4>
<p>every() 和 some() 方法是数组的逻辑判定：它们将数组元素应用指定的函数进行判定，返回true或false</p>
<ul>
<li>一旦every() 和some()确定返回值，就停止遍历</li>
<li>every()在函数第一次返回false 就返回false，some() 在函数第一次返回true 就返回true</li>
<li>空数组调用时，every() 返回true， some()放回false</li>
</ul>
<pre class='line-numbers language-javascript'>
<code>
var arr = [];
console.log(arr.every(function(){return true;})); // true
console.log(arr.some(function(){return true;})); // false
</code>
</pre>
<br>
<h4>reduce() 和 reduceRight()</h4>
<p>reduce() 和 reduceRight() 使用指定的函数将数组元素组合，生成单个值</p>
<pre class='line-numbers language-javascript'>
<code>
var arr = [1, 2, 3, 4, 5,  6, 7, 8, 9];
var sum = arr.reduce(function(x, y) {
    console.log('x: ', x, ', y: ', y);
    return x + y;
});

console.log(sum);

/** 运行结果
x:  1 , y:  2
x:  3 , y:  3
x:  6 , y:  4
x:  10 , y:  5
x:  15 , y:  6
x:  21 , y:  7
x:  28 , y:  8
x:  36 , y:  9
45
*/
</code>
</pre>
<br>
<h4>indexOf() 和 lastIndexOf()</h4>
<p>搜索整个数组中具有指定值的元素，返回找到的第一个元素的索引，没有找到就返回－1。indexOf() 从头到尾搜索，而lastIndexOf() 反向搜索</p>
<ul>
	<li>第一个参数是需要搜索的值</li>
	<li>第二个参数是可选的，指定起始搜索位置，如果不指定，indexOf() 从0位置开始搜索，而lastIndexOf() 从尾部开始搜索</li>
	<li>第二个参数可以是负数，代表相对于数组末尾的偏移量， 例如：－1指定最后一个元素</li>
	<li>字符串也有indexOf() 和 lastIndexOf() 方法，用法类似</li>
</ul>
