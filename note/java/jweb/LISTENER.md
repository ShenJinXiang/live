# LISTENER

tags:java

---

## 监听器定义
> 监听器就睡一个实现特定接口的普通java程序，这个程序专门用于监听另外一个java对象的方法调用和属性改变，当监听对象发生上述事件后，监听器某个方法将立即被执行

## 描述java事件监听器
1. java的事件监听机制涉及到三个组件：事件源、事件监听器、事件对象
2. 当事件源上发生操作时，它将会调用事件监听器的一个方法，并在调用这个方法时，会传递事件对象过来
3. 事件监听器由开发人员编写，开发人员在事件监听器中，通过事件对象可以拿到事件源，从而对事件源上的操作进行处理

## 一些例子

### window窗口事件监听

```java
Frame f = new Frame();
f.setSize(400, 400);
f.setVisible(true);
		
f.addWindowListener(new MyListener());
```

* 监听器代码

```java
class MyListener implements WindowListener {

	@Override
	public void windowOpened(WindowEvent e) {
		
	}

	@Override
	public void windowClosing(WindowEvent e) {
		Frame f = (Frame) e.getSource();
		System.out.println("closeing...");
		f.dispose();
	}

	@Override
	public void windowClosed(WindowEvent e) {
		
	}

	@Override
	public void windowIconified(WindowEvent e) {
		
	}

	@Override
	public void windowDeiconified(WindowEvent e) {
		
	}

	@Override
	public void windowActivated(WindowEvent e) {
		
	}

	@Override
	public void windowDeactivated(WindowEvent e) {
		
	}
	
}
```

### 观察模式设计监听器

* listener接口

```java
interface PersonListener {

	public void doRun(Event event);
	
	public void doEat(Event event);
}
```

* Person类

```java
class Person {
	
	private PersonListener listener;
	
	public void registerListener(PersonListener listener) {
		this.listener = listener;
	}
	
	public void run() {
		if(listener != null) {
			Event event = new Event(this);
			this.listener.doRun(event);
		}
		System.out.println("run~~~");
	}
	
	public void eat() {
		if(listener != null) {
			Event event = new Event(this);
			this.listener.doEat(event);
		}
		System.out.println("eat~~~");
	}
}
```

* Event 事件对象

```java
class Event {
	
	private Person person;
	
	public Event(Person person) {
		this.person = person;
	}
	
	public Person getPerson() {
		return person;
	}
	
	public void setPerson() {
		this.person = person;
	}
}
```

* listener 实现类

```java
class MListener implements PersonListener {

	@Override
	public void doRun(Event event) {
		System.out.println(event.getPerson() + "listener run");
	}

	@Override
	public void doEat(Event event) {
		System.out.println(event.getPerson() + "listener eat");		
	}
	
}
```

* 主程序代码

```java
Person p = new Person();
p.registerListener(new MListener());
p.eat();
p.run();
```

## Servlet监听器
### 事件源
* ServletContext
* HttpSession
* ServletRequest

### 三大类型监听器
1. 监听三个与对象的创建和销毁的事件监听器
2. 监听与对象中属性的增加和删除的事件监听器
3. 监听绑定到HttpSession域中某个对象的状态的事件监听器

|名称|作用|
|:-:|:-:|
|ServletContextListener|监听ServletContext的创建和销毁|
|HttpSessionListener|监听HttpSession的创建和销毁|
|ServletRequestListener|监听ServletRequest的创建和销毁|
|ServletContextAttributeListener|监听ServletContext的属性添加、删除、替换操作|
|HttpSessionAttributeListener|监听HttpSession的属性添加、删除、替换操作|
|ServletRequestAttributeListener|监听ServletRequest的属性添加、删除、替换操作|
|HttpSessionBindingListener|监听自身是否绑定到session中|
|HttpSessionActivationListener|活化和冻化|

#### ServletContextListener 实现

* listener实现代码

```java
public class MyServletContextListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		System.out.println("MyServletContextListener  destroy");
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		System.out.println("MyServletContextListener  init");
	}

}
```

* web.xml配置

```xml
<listener>
  	<listener-class>com.shenjinxiang.listener.MyServletContextListener</listener-class>
</listener>
```

web服务器启动时，调用contextInitialized方法，可以做一些服务器初始化工作，如 定时器、 spring代码运行等

#### HttpSessionListener 实现

* listener 实现代码

```java
public class MyHttpSessionListener implements HttpSessionListener {

	@Override
	public void sessionCreated(HttpSessionEvent arg0) {
		System.out.println("MyHttpSessionListener created");
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent arg0) {
		System.out.println("MyHttpSessionListener destroy");
	}

}
```

* web.xml配置

```xml
<listener>
  	<listener-class>com.shenjinxiang.listener.MyHttpSessionListener</listener-class>
</listener>
```

例子：统计在线人数

#### ServletRequestListener 实现

* listener 实现代码

```java
public class MyRequestListener implements ServletRequestListener {

	@Override
	public void requestDestroyed(ServletRequestEvent arg0) {
		System.out.println("request destroy");
	}

	@Override
	public void requestInitialized(ServletRequestEvent arg0) {
		System.out.println("request init");
	}

}
```

* web.xml 配置

```xml
<listener>
  	<listener-class>com.shenjinxiang.listener.MyRequestListener</listener-class>
</listener>
```

### 统计当前在线人数

* listener 实现代码

```java
public class CountNumListener implements HttpSessionListener {

	@Override
	public void sessionCreated(HttpSessionEvent se) {
		ServletContext context = se.getSession().getServletContext();
		Integer count = Integer.parseInt((String) context.getAttribute("count"));
		System.out.println("count : " + count);
		count = (count == null) ? 1 : count + 1;
		context.setAttribute("count", count);
		
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
		ServletContext context = se.getSession().getServletContext();
		Integer count = Integer.parseInt((String) context.getAttribute("count"));
		count--;
		context.setAttribute("count", count);
	}

}
```

* web.xml 配置

```xml
<listener>
   	<listener-class>com.shenjinxiang.listener.CountNumListener</listener-class>
</listener>
```

### 定时器联系

*  每个一秒打印一次时间

```java
public class Demo {

	public static void main(String[] args) {
		Timer timer = new Timer();
		timer.schedule(new DemoTask(), 0, 1000);
	}
}

class DemoTask extends TimerTask {

	@Override
	public void run() {
		SimpleDateFormat sdf = new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
		Date d = new Date();
		System.out.println(sdf.format(d));
	}
	
}
```

### 自定义session扫描器

* iterator 迭代集合线程，ListIterator
* timer 定时器
* 代码同步锁，synchronized(lock)

```java
public class SessionScanner implements HttpSessionListener, ServletContextListener{
	
	private List<HttpSession> list = Collections.synchronizedList(new LinkedList<HttpSession>());
	private Object lock = new Object();  

	@Override
	public void sessionCreated(HttpSessionEvent se) {
		HttpSession session = se.getSession();
		synchronized (lock) {	// 锁旗标
			list.add(session); 
		}
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		Timer timer = new Timer();
		timer.schedule(new MyTask(list, lock), 0, 5 * 60 * 1000);
	}
	
	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
		
	}
	
	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		
	}

}

class MyTask extends TimerTask {
	
	private List<HttpSession> list;
	private Object lock;
	
	public MyTask(List<HttpSession> list, Object lock) {
		this.list = list;
		this.lock = lock;
	}
	
	@Override
	public void run() {
		synchronized (lock) {
			ListIterator<HttpSession> it = list.listIterator();
			while(it.hasNext()) {
				HttpSession session = (HttpSession) it.next();
				if(System.currentTimeMillis() - session.getLastAccessedTime() > 5 * 60 *  1000) {
					it.remove();
				}
				
			}
		}
	}
	
}
```

### 定时发送邮件
1. ServletContextListener 监听器，服务器启动时，运行代码
2. 定时器，在预定时间发送邮件

* ServletContextListener 实现代码

```java
public class SendMailTimer implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {

	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		System.out.println("listener init ...");
		Timer timer = new Timer();
		Calendar c = Calendar.getInstance();
		c.set(2016, 6, 24, 0, 20, 0);
		timer.schedule(new TimerTask() {
			
			@Override
			public void run() {
				System.out.println("发送mail～～～");
			}
		}, c.getTime());
	}

}
```

* web.xml的配置

```xml
<listener>
   		<listener-class>com.shenjinxiang.listener.SendMailTimer</listener-class>
</listener>
```

### 属性监听器

* ServletContextAttributeListener

```java
public class MyServletContextAttributeListener implements ServletContextAttributeListener {

	@Override
	public void attributeAdded(ServletContextAttributeEvent scab) {
		String name = scab.getName();
		Object value = scab.getValue();
		System.out.println("向ServletContext中存了： " + name + " = " + value);
	}

	@Override
	public void attributeRemoved(ServletContextAttributeEvent scab) {
		System.out.println("从ServletContext中删除了： " + scab.getName());
	}

	@Override
	public void attributeReplaced(ServletContextAttributeEvent scab) {
		System.out.println("ServeltContext中 " + scab.getName() + " 属性被替换了");
	}

}
```

### 关于HttpSession

**保存在session域中的对象可以有多种状态**

 * 绑定到session中
 * 从session域中解除绑定
 * 随session对象持久化道一个存储设备中
 * 随session对象从一个存储设备中恢复
 
**Servlet规范中定义了两个特殊的监听器 帮助javabean 了解自己在session域中的这些状态**

* HttpSessionActivationListener
* HttpSessionBindingListener

**不需要在web.xml中配置**

* HttpSessionBindingListener

```java
public class User implements HttpSessionBindingListener {
	
	private int id;
	private String name;
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public void valueBound(HttpSessionBindingEvent arg0) {
		System.out.println("user对象存到session中了");
	}

	@Override
	public void valueUnbound(HttpSessionBindingEvent arg0) {
		System.out.println("user从session中解除绑定了");
	}

}
```

* HttpSessionActivationListener

```java
public class MyBean implements HttpSessionActivationListener {

	@Override
	public void sessionDidActivate(HttpSessionEvent arg0) {
		System.out.println("硬盘 －－> 内存");
	}

	@Override
	public void sessionWillPassivate(HttpSessionEvent arg0) {
		System.out.println("内存 --> 硬盘");
	}

}
```