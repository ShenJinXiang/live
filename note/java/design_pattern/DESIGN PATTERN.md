# DESIGN PATTERN

tags:java

---

## 设计原则
* Open-Close Principle (OCP) 开-闭原则 ----对扩展开放，对修改关闭

* Liskov Substituition Principle(LSP) 里氏替换 ----子类必须能够替换基类
* Dependence Inversion Principle(DIP) 依赖倒置原则 ----设计要依赖于抽象后不是具体化
* Interface Segregation Principle(ISP) 接口隔离原则 ----将大的接口打散成多个小接口
* Composition/Aggreation Reuse Principle(CARP) 合成复用原则 ----先考虑复合，而不是继承
* Law of Demeter or Least Knowlegde Principle(LoD or LKP) 迪米特法则或最少知道原则 ----或最少只是原则
	一个对象应到尽可能少的去了解其他对象，使得系统功能模块相对独立