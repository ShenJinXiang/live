﻿# filter

tags:java

---

filter 也称为过滤器，上servlet技术中最激动人心的技术，开发人员可以通过filter技术，对web服务器管理所有web资源

## 常见应用
1. 在目标文件执行之前，进行权限检查，判断用户是否有权限访问该服务器资源
2. 在目标文件执行之前做一些预处理，例如解决乱码问题
3. 在filter放行之后，可以捕获到目标资源的输出，获取输出内容，压缩后输出


## 实现方式
1. 实现*javax.servlet.Filter*接口
2. 实现init() doFilter() destroy()方法
3. web.xml中配置filter

web.xml中的配置
```xml
<filter>
    <filter-name></filter-name>
  	<filter-class></filter-class>
</filter>
<filter-mapping>
  	<filter-name></filter-name>
  	<url-pattern></url-pattern>
</filter-mapping>
```

* filter标签中可以添加<init-param>标签，设置初始化配置
* doFilter()方法中第一步先将request和response转型

```java
HttpServletRequest req = (HttpServletRequest) request;
HttpServletResponse resp = (HttpServletResponse) response;
```

|方法名|作用|
|:-:|:-:|
|init|初始化方法，服务器启动时执行|
|doFilter|执行拦截业务处理|
|destroy|销毁filter，关闭服务器执行|

### despatcher细节
*filter-mapping标签中可以添加despatcher标签*
```xml
<filter-mapping>
    <filter-name></filter-name>
    <url-parttern></url-parttern>
    <dispatcher>REQUEST|FORWARD|INCLUDE|ERROR</dispatcher>
</filter-mapping>
```

|值|说明|
|:-:|:-:|
|REQUEST|拦截直接请求访问的资源, 默认选项|
|FORWARD|拦截forward方式访问的资源|
|INCLUDE|拦截include方式访问的资源|
|ERROR|拦截ERROR方式访问的资源|

## filter链
* 可以配置多个filter，按web.xml中的<filter-mapping>标签的配置顺序执行

## 处理乱码问题
* filter代码

```java
public class FileterDemo1 implements Filter {
	
	private FilterConfig config;

	@Override
	public void destroy() {
		System.out.println("FileterDemo1 -----------------  destroy");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		req.setCharacterEncoding(config.getInitParameter("encoding"));
		resp.setCharacterEncoding(config.getInitParameter("encoding"));
		chain.doFilter(req, resp);
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		this.config = config;
		System.out.println("FileterDemo1 --------------------  init");
	}

}
```
* web.xml中的配置

```xml
<filter>
    <filter-name>FileterDemo1</filter-name>
  	<filter-class>com.shenjinxiang.filter.FileterDemo1</filter-class>
  	<init-param>
  		<param-name>encoding</param-name>
  		<param-value>utf-8</param-value>
  	</init-param>
</filter>
<filter-mapping>
  	<filter-name>FileterDemo1</filter-name>
  	<url-pattern>*</url-pattern>
</filter-mapping>
```

## 禁止缓存动态资源
* filter代码

```java
public class NoCacheFilter implements Filter {

	@Override
	public void destroy() {
		System.out.println("NoCacheFilter -----------------  destroy");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		resp.setDateHeader("Expires", -1);
		resp.setHeader("Cache-Control", "no-cache");
		resp.setHeader("Paragma", "no-cache");
		chain.doFilter(req, resp);
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		System.out.println("NoCacheFilter ---------------------  init");
	}

}
```

* web.xml中的配置

```xml
<filter>
    <filter-name>NoCacheFilter</filter-name>
  	<filter-class>com.shenjinxiang.filter.NoCacheFilter</filter-class>
</filter>
<filter-mapping>
  	<filter-name>NoCacheFilter</filter-name>
  	<url-pattern>*.jsp</url-pattern>
</filter-mapping>
```

## 控制浏览器缓存静态资源
* filter代码

```java
public class CacheFilter implements Filter {
	
	private FilterConfig config;

	@Override
	public void destroy() {
		System.out.println("CacheFilter destroy !!!");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		
		String url = req.getRequestURI();
		int expires = 0;
		if(url.endsWith(".jpg")) {
			expires = Integer.parseInt(this.config.getInitParameter("jpg"));
		} else if (url.endsWith(".js")) {
			expires = Integer.parseInt(this.config.getInitParameter("js"));
		} else if (url.endsWith(".css")){
			expires = Integer.parseInt(this.config.getInitParameter("css"));
		}
		resp.setDateHeader("expires", expires * 60 * 1000);
		chain.doFilter(req, resp);
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		System.out.println("CacheFilter init ~~~");
		this.config = config;
	}

}
```

* web.xml中的配置

```xml
<filter>
    <filter-name>CacheFilter</filter-name>
  	<filter-class>com.shenjinxiang.filter.CacheFilter</filter-class>
  	<init-param>
  		<param-name>js</param-name>
  		<param-value>10</param-value>
  	</init-param>
  	<init-param>
  		<param-name>jpg</param-name>
  		<param-value>20</param-value>
  	</init-param>
  	<init-param>
  		<param-name>css</param-name>
  		<param-value>30</param-value>
  	</init-param>
</filter>
<filter-mapping>
  	<filter-name>CacheFilter</filter-name>
  	<url-pattern>*.js</url-pattern>
</filter-mapping>
<filter-mapping>
  	<filter-name>CacheFilter</filter-name>
  	<url-pattern>*.css</url-pattern>
</filter-mapping>
<filter-mapping>
  	<filter-name>CacheFilter</filter-name>
  	<url-pattern>*.jpg</url-pattern>
</filter-mapping>
```

## 处理get方式乱码问题 
* 增强request代码：

```java
public class MyRequest1 extends HttpServletRequestWrapper {
	
	private HttpServletRequest request;

	public MyRequest1(HttpServletRequest request) {
		super(request);
		this.request = request;
	}

	@Override
	public String getParameter(String name) {
		String value = this.request.getParameter(name);
		if(!this.request.getMethod().equalsIgnoreCase("get")) {
			return value;
		}
		if(value == null) {
			return null;
		}
		try {
			value = new String(value.getBytes("iso8859-1"), this.request.getCharacterEncoding());
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
		return value;
	}

}
```

* filter代码

```java
public class CharacterFilter implements Filter {
	
	@Override
	public void destroy() {
		System.out.println("CharacterFilter destroy");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		HttpServletRequest requ = new MyRequest1(req);
		chain.doFilter(requ, resp);
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		System.out.println("CharacterFilter init");
	}

}
```

* web.xml配置

```xml
<filter>
  	<filter-name>CharacterFilter</filter-name>
  	<filter-class>com.shenjinxiang.filter.CharacterFilter</filter-class>
</filter>
<filter-mapping>
  	<filter-name>CharacterFilter</filter-name>
  	<url-pattern>*</url-pattern>
</filter-mapping>
```