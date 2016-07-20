# jdbc

tags:java

---

## 事务处理
*事务：逻辑上的一组操作，组成这组操作的各个单元，要不全部成功，要不全部不成功*

### 数据库开启事务命令
```sql
start transaction  -- 开启事务
rollback  -- 回滚事务
commit -- 提交事务
set transacion isolation level  -- 设置事务隔离级别
select @@tx_isolation  -- 查询当前事务隔离级别
```
### JDBC控制事务语句
```java
Connection.setAutoCommit(false); // start transaction
Connection.rollback(); // rollback
Connection.commit(); // commit
Savepoint sp = Connection.setSavepoint(); // 设置回滚点
Connection.rollback(sp) // 回滚到 回滚点 手动回滚后一定要记得commit
```

### 事务的特性 ACID
* 原子性：(Atomicity)事务是不可分割的工作单位，事务中的操作要么都发生，要不都不发生。 
* 一致性：(Consistency)事务前后数据的完整性必须保持一致 
* 隔离性：(Isolation)事务的隔离性是指多个用户访问数据时，一个用户的事务不能被其他用户的事务干扰，多个并发事务之间数据要相互隔离
* 持久性：(Durability)持久性是指一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来及时数据库发生故障也不应该对其有任何影响

### 事务隔离性
*多个线程开启各自事务操作数据库中数据时，数据库系统要负责隔离操作，以保证各个线程在获取数据时的准确性*
*不考虑隔离性，可能会引发的问题:*
1. 脏读 一个事务读取到另外一个事物未提交的数据
2. 不可重复读 在一个事物内读取表中的某一行数据，多次值不同
3. 虚读 一个事务内读取到别的事务插入的数据，导致前后不一致

### 数据库四种隔离级别
1. Serializable 可以避免脏读、不可重复读、虚读
2. Repeatable read  可以避免脏读，不可重复读
3. Read committed  可避免脏读情况
4. Read uncommitted 最低级别

## 数据库连接池



