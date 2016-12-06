# Maven

## Maven简介
跨平台的项目管理工具，Apache组织的开源项目，主要服务于基于Java平台的项目构建、依赖管理和项目信息管理

Maven是跨平台的，无论在Winwods上，还是Linux或Mac上，都可以使用同样的命令

几乎任何Java应用都会借用一些第三方的开源类库，这些类库可通过依赖的方式引入到项目中，随着依赖增多，版本不一致、版本冲突、依赖臃肿等问题都会接踵而来，Maven通过一个坐标系统准确定位每一个构建，找到任何一个Java类库，有序的管理依赖，轻松解决繁杂的依赖问题

## Maven 的安装和配置

### Windows上安装Maven
#### 检查jdk安装
jdk5及以上的版本

```
echo %JAVA_HOME%
echo $JAVA_HOME
java -version
```

#### 下载Maven
下载地址[http://maven.apache.org/download.cgi](http://maven.apache.org/download.cgi)，下载apache-maven-3.x-bin.zip，如果要查看源码，下载apache-maven-3.x-src.zip

#### 本地安装
解压下载的zip，配置环境变量，变量名M2_HOME

*查看maven版本号*
```
mvn -v
```

#### 升级Mave
下载新版本，重新配置环境变量

### 安装目录分析
* bin: 该目录包含了mvn运行的脚本，这些脚本用来配置Java命令，准备好classpath和相关的Java系统属性，然后执行Java命令。其中mvn是基于UNIX平台的shell脚本，mvn.bat是基于Windows平台的bat脚本
* boot: 只包含一个文件，plexus-classworlds是一个类加载器框架
* conf: 包含了一个非常重要的文件settings.xml，修改该文件，能在机器上全局定制Maven的行为
* lib: 包含了所有Maven运行时需要的Java类库

#### ~/.m2
放置Maven的本地仓库.mx/repository 所有的Maven构件都被存储在仓库中，以方便重用

### 设置HTTP代理
首先确认无法直接访问公共的Maven中央仓库，命令：
```
ping repol.maven.org
```

