# annotation

tags:java

---

## Annotation定义 
注解(annotation)也叫元数据，声明在包、类、字段、方法、局部变量、方法参数等前面，可以用来替换配置文件

## jdk中常见的注解
* @Override 限定重写父类方法，只能用于方法上
* @Deprecated 用于表示某个程序元素(类、方法等)已过时
* @SuppressWarnings 抑制编译器警告

## 按运行机制分类
* 源码注解 注解只能在源码中存在，编译成class文件就不存在了
* 编译时注解 在class文件中仍存在
* 运行时注解 在运行阶段还气作用，甚至会影响运行逻辑的注解

## 自定义注解
java中使用@interface申明注解, 定义注解的格式：
> public @interface 注解名{定义体}

代码
```java
public @interface MyAnnotation1 {

}
```

### 注解的属性
注解中可以带属性：
```java
public @interface MyAnnotation1 {
	
	String name();
	int age();
}
```

使用方法
```java
@MyAnnotation1(name = "ZhangSan", age = 18)
public void test3() {
    // do something
}
```

属性的类型范围：
* String
* java中的8种基本类型
* Class类型
* 枚举类型
* 注解类型
* 以上类型的一维数组

当注解只有一个属性的时候，可以将其属性名称设置成value，如果只有做，在使用时，不需要制定属性名：
```java
public @interface MyAnnotation {
	String value();
}
```

使用方式：
```java
@MyAnnotation("hehe")
public void test() {
    // do something
}
```

注解中可以没有成员属性，没有成员属性的注解称为标记注解

### 元注解
元注解是指用来修饰注解的注解
#### @Target
@Target用来描述Annotation作用的元素范围，如果没有申明，则默认可以用在任一程序元素上。
@Target的源码：
```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.ANNOTATION_TYPE)
public @interface Target {
    ElementType[] value();
}
```
可以看到@Target注解只有一个成员属性value，所以在使用时，可以省略属性名称，同时value的类型是ElementType的一维数组，查看ElementType源码：
```java
public enum ElementType {
    TYPE, // 用于描述类、接口(包括注解)、枚举

    FIELD, // 用于描述字段 (包括枚举中的字段)

    METHOD, // 用于描述方法

    PARAMETER, // 用于描述参数

    CONSTRUCTOR, // 用于描述构造方法

    LOCAL_VARIABLE, // 用于描述局部变量
    
    ANNOTATION_TYPE, // 用于描述注解

    PACKAGE, // 用于描述包

    TYPE_PARAMETER, 

    TYPE_USE
}
```

接下来就可以使用了, 可以根据实际情况，设置注解使用的范围
```java
@Target({ElementType.TYPE, ElementType.FIELD, ElementType.METHOD})
public @interface MyAnnotation {
	
	String value();
}
```

#### @Retention
@Retention指示注释类型的注释要保留多久,即用来描述注解的作用域，java源代码->class文件->运行时

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.ANNOTATION_TYPE)
public @interface Retention {

    RetentionPolicy value();
}
```

@Retention同样只有一个成员属性value，类型为RetentionPolicy，查看源码可以知道RetentionPolicy是一个枚举，源码为：
```java
public enum RetentionPolicy {
    SOURCE, // 在源文件中有效, 即.java文件中有效

    CLASS, // 在class文件中有效(默认值)

    RUNTIME // 在运行时有效
}
```

如果不对@Retention进行设置，默认值为RetentionPolicy.CLASS。通常，我们需要通过反射技术对注解做一些逻辑处理，那么需要将值设定为RetentionPolicy.RUNTIME

#### @Inherited
@Inherited注解用于描述被标注的类型是可以继承的，如果一个使用了@Inherited修饰的Annotation类型被用于一个class，则这个Annotation将被用于该class的子类
@Inherited的源码：
```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.ANNOTATION_TYPE)
public @interface Inherited {
}
```
Inherited注解没有属性，是一个标记注解

#### @Documented
@Documented用于描述其它类型的annotation应该被作为被标注的程序成员的公共API，因此可以被例如javadoc此类的工具文档化。Documented是一个标记注解，没有成员,源码如下：
```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.ANNOTATION_TYPE)
public @interface Documented {
}
```

### 解析注解

```java
@Retention(RetentionPolicy.RUNTIME)
public @interface DbInfo {

	String driver();
	String url();
	String username();
	String password();
}
```

```java
public class JdbcUtils {
	
	private static String driver;
	private static String url;
	private static String username;
	private static String password;
	
	static {
		try {
			Method method = JdbcUtils.class.getMethod("getConnection", null);
			DbInfo info = method.getAnnotation(DbInfo.class);
			driver = info.driver();
			url = info.url();
			username = info.username();
			password = info.password();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@DbInfo(driver = "com.mysql.jdbc.Driver", password = "jdbc:mysql://localhost:3306/webTest", url = "root", username = "6098")
	public static void getConnection() throws NoSuchMethodException, SecurityException {
		System.out.println("driver -> " + driver);
		System.out.println("url -> " + url);
		System.out.println("username -> " + username);
		System.out.println("password -> " + password);
	}
	
	public static void main(String[] args) throws NoSuchMethodException, SecurityException {
		JdbcUtils.getConnection();
	}
}
```
