﻿# Effective JAVA

tags:java

---

## 考虑用静态工厂方法代替构造器
**优势:**

* 有名称，易于阅读
* 不必在每次调用它们的时候创建一个新的对象
* 它们可以返回原返回类型的任何子类型的对象
* 在创建参数化实例的时候，它们使代码变得更加简洁

**缺点:**

* 类如果不含有共有的或者受保护的构造器，就不能被子类化
* 它们与其他的静态方法实际上没有任何区别