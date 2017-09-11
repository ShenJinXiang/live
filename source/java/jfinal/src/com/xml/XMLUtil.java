package com.xml;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.core.util.QuickWriter;
import com.thoughtworks.xstream.io.HierarchicalStreamWriter;
import com.thoughtworks.xstream.io.xml.DomDriver;
import com.thoughtworks.xstream.io.xml.PrettyPrintWriter;
import com.thoughtworks.xstream.io.xml.XppDriver;

import java.io.Writer;

/**
 * Created by shenjinxiang on 2017-07-18.
 */
public class XMLUtil {
    private static XStream xstream1 = new XStream(new XppDriver() {
        public HierarchicalStreamWriter createWriter(Writer out) {
            return new PrettyPrintWriter(out) {
                // 对所有xml节点的转换都增加CDATA标记
                boolean cdata = false;

                @SuppressWarnings("unchecked")
                public void startNode(String name, Class clazz) {
                    super.startNode(name, clazz);
                }

                protected void writeText(QuickWriter writer, String text) {
                    if (cdata) {
                        writer.write("<![CDATA[");
                        writer.write(text);
                        writer.write("]]>");
                    } else {
                        writer.write(text);
                    }
                }
            };
        }
    });

    private static XStream createXstream(){
        return new XStream(new XppDriver() {
            public HierarchicalStreamWriter createWriter(Writer out) {
                return new PrettyPrintWriter(out) {
                    // 对所有xml节点的转换都增加CDATA标记
                    boolean cdata = false;

                    @SuppressWarnings("unchecked")
                    public void startNode(String name, Class clazz) {
                        super.startNode(name, clazz);
                    }

                    protected void writeText(QuickWriter writer, String text) {
                        if (cdata) {
                            writer.write("<![CDATA[");
                            writer.write(text);
                            writer.write("]]>");
                        } else {
                            writer.write(text);
                        }
                    }
                };
            }
        });
    }

    /**
     * 对象->xml
     * @param object
     * @return
     */
    public static String objetToXml(Object object,Class... clazzs) {
        XStream xstream = createXstream();
        for (Class clazz : clazzs) {
            xstream.alias(clazz.getSimpleName().toLowerCase(), clazz);
        }
        xstream.autodetectAnnotations(true);
//		return "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n"+xstream.toXML(object).replaceAll("__", "_");
        return xstream.toXML(object).replaceAll("__", "_");
    }

    /**
     * xml->对象
     * @param xml
     * @return
     */
    public static Object xmlToObject(String xml,Class... clazzs) {
        XStream xstream = createXstream();
        System.out.println("xml 字符串长度" + xml.length());
        for (Class clazz : clazzs) {
            xstream.alias(clazz.getSimpleName().toLowerCase(), clazz);
        }
        xstream.autodetectAnnotations(true);
        return xstream.fromXML(xml);
    }

    /**
     *  将传入xml文本转换成Java对象
     * @Title: toBean
     * @Description: TODO
     * @param xmlStr
     * @param cls  xml对应的class类
     * @return T   xml对应的class类的实例对象
     *
     * 调用的方法实例：PersonBean person=XmlUtil.toBean(xmlStr, PersonBean.class);
     */
    public static <T> T  toBean(String xmlStr,Class<T>... cls){
        //注意：不是new Xstream(); 否则报错：java.lang.NoClassDefFoundError: org/xmlpull/v1/XmlPullParserFactory
        XStream xstream=new XStream(new DomDriver());
        for (Class clazz : cls) {
            xstream.alias(clazz.getSimpleName().toLowerCase(), clazz);
        }
        xstream.processAnnotations(cls);
        T obj=(T)xstream.fromXML(xmlStr);
        return obj;
    }
}
