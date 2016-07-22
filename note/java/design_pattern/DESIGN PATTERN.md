# DESIGN PATTERN

tags:java

---

## 设计原则
* Open-Close Principle (OCP) 开-闭原则 ----对扩展开放，对修改关闭

* Liskov Substituition Principle(LSP) 里氏替换 ----子类必须能够替换基类
* Dependence Inversion Principle(DIP) 依赖倒置原则 ----设计要依赖于抽象后不是具体化
* Interface Segregation Principle(ISP) 接口隔离原则 ----将大的接口打散成多个小接口
* Composition/Aggreation Reuse Principle(CARP) 合成复用原则 ----先考虑复合，而不是继承
* Law of Demeter or Least Knowlegde Principle(LoD or LKP) 迪米特法则或最少知道原则 ----一个对象应到尽可能少的去了解其他对象，使得系统功能模块相对独立

## 策略模式
> 定义了算法族，分别封装起来，让它们之间可以互相替换，此模式让算法的变化独立于使用算法的客户

## 观察者模式
> 定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新

## 装饰者模式
> 动态地将责任附加道对象上。若要扩展功能，装饰者提供了比继承更有弹性的替代方案

## 单例模式
> 确保一个类直邮一个实例，并提供一个全局访问点

## 适配器模式
> 将一个类的接口，转换成客户期望的另一个接口。适配器让原本接口不兼容的类可以合作无间