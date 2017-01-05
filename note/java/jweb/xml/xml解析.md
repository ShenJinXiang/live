# XML解析
XML的解析分为两种：dom和sax

* dom - (Document Object Model 文档对象模型) w3c推荐的解析方式
* sax - (Simple API for XML)不是官方标准 XML社区事实上的标准，几乎所有xml解析器都支持

|解析方式|优点|缺点|
|:--:|:--|:--|
|dom|CRUD方便|占用内存较大|
|sax|占用内存小，解析速度块|只适合文档读取，不适合增删改操作|


## 调整jvm内存

```java
// 默认为64M内存
public class JvmDemo {
	public static void main(String[] args) {
		byte[] b = new byte[1024 * 1024 * 1024];
	}
}
```

解析开发包
* Jaxp(sun公司)
* Jdom
* dom4j
