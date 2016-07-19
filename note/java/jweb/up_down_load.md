# 文件上传下载

tags: java

## 文件上传
### 从web页面中添加上传输入项
```html
    <input type='file'>
```
* 必须要设置input输入项的name属性
* 必须把form的enctype属性的值设定为multipart/form-data。设置以后，浏览器在上传文件是，将把数据附带到http请求信息体重，并使用mime协议对上传的文件进行描述，以方便接收，对上传数据进行解析和处理

### 在servlet中读取上传文件的数据，并保存到本地硬盘中

*表单类型为multipart/form-data 不能使用传统方式获取数据*
#### 使用request获取数据流
```java
InputStream in = request.getInputStream();
int len = 0;
byte buffer[] = new byte[1024];
while((len = in.read(buffer)) > 0) {
    System.out.println(new String(buffer, 0, len));
}
```
#### 导入jar包
1. commons.fileupload
2. commons-io

#### 大体代码
```java
// servlet 解析上传的文件
public void doPost(HttpServletRequest req, HttpServletResponse){
    DiskFileItemFactory factory = new DiskFileItemFactory();
    ServletFileUpload upload = new ServletFileUpload(factory);
    upload.setHeaderEncoding("UTF-8");
    
    // 此处可以添加监听器， 获取上传进度
    
    List<FileItem> list = upload.parseRequest(request);
    for(FileItem item : list) {
        if(item.isFormField()){
            String inputName = item.getFieldName();
            String inputValue = item.getString();
            System.out.println(inputName + " = " + inputValue);
        } else {
            String filename = item.getName().substring(item.getName().lastIndexOf("\\") + 1);
            InputStream in = item.getInputStream();
            int len = 0;
            byte buffer[] = new byte[1024];
            FileOutputStream out = new FileOutputSteam("....");
            while((len = in.read(buffer)) > 0) {
                out.write(buffer, 0, len);
            }
        }
    }
}
```

#### 中文乱码问题
```java
// 设置上传文件乱码问题
upload.setHeaderEncoding("UTF-8");
// 设置普通字段乱码问题
inputValue = new String(inputValue.getBytes("ISO8859-1"), "UTF-8");
```

#### 判断是不是multipart/form-data
*处理表单之前要调用uploade.isMultipartContent(request)方法，判断表单提交的类型*
```java
if(!upload.isMultipartContent(requset)) {
// 不是multipart/form-data
} else {
// 是multipart/form-data
}
```

#### 上传文件大小
* 上传文件默认未10k
* 上传文件的保存目录，绝对不能让外界访问到 保存到WEB-INF目录中
```java
factory.setSizeThreshoid(1024 * 1024); // 设置1M
factory.setRepository(new File()); // 如果超过文件大小，设置临时保存目录
item.delete(); // 在流关闭以后执行，删除临时文件，应该在finally块中
```

#### 限制文件的大小
```java
upload.setFileSizeMax(long fileSizeMx); // 单个文件的大小 单位是 字节, 如果超出，会抛异常 FileUploadBase.FileSizeLimitExcededException
upload.setSizeMax(); // 设置上传文件的总大小
```

#### 判断输入项为空
```java
if(fileName == null || "".equals(fileName)){
    continue;
}
```

#### 为每一个文件设置唯一文件名
```java
public String generateFileName(String fileName) {
    // UUID.randomUUID().toString();
    return UUID.randomUUID().toString() + "_" + fileName;
}
```

#### 与平台无关的处理
分隔符  使用*File.separator*

#### 存放文件分类
*为避免一个文件夹下保存超过1000个文件，影响文件访问性能，程序应该把文件打散后存储*
```java
public String generateSavePath(String path, String filename) {
    int hashcode = filename.hashcode();
    int dir1 = hashcode & 15;
    int dir2 = (hashcode >> 4) && 0xf;
    String savePath = path + File.separator + dir1 + File.separator + dir2;
    File file = new File(savePath);
    if(!file.exists()) {
        file.mkdirs();
    }
    return savePath;
}
```

#### 上传进度
```java
upload.setProgressListener(); //添加监听器
```

* public interface ProgressListener 实现此接口  
* pBytesRead: 解析器已读取的数据 长度
* pContentLenth   总数据长度

```java
upload.setProgressListener(new ProgressListener(){
    public void update(long pBytesRead, long, pContentLength, int pItems) {
        System.out.println("当前已解析：" + pBytesRead);
    }
});
```
## 文件下载
### 列出所有文件
```java
public void doGet(HttpServletRequest request, HttpServletResponse response) {
    String path = this.getSerlvetContext().getRealPath("/WEB-INF/upload");
    Map map = new HashMap();
    listFile(new File(path), map);
    request.setAttribute("map", map);
    request.getRequestDispatcher("/listfile.jsp").forward(request, response);

public void listFile(File file, Map map) {
    if(!file.isFile()){
        File children[] = file.listFiles();
        for(File f : children) {
        listFile(f, map);
    }
    } else {
        String filename = file.getName().substring(file.getName().indexOf("_") + 1);
        // <a href="/serlvet?filename=服务器中的文件名">原始文件名</a>
        map.put(file.getName(), filename) 
    }
}

response.setHeader("content-disposition", "attachment;filename=" + URLEncoder.encode(filename, "utf-8"));
```