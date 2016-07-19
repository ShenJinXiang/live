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

**表单类型为multipart/form-data 不能使用传统方式获取数据**
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
## 文件下载