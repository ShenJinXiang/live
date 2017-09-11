package com.xml.client;

import com.xml.XMLUtil;
import com.xml.entity.Head;

/**
 * Created by shenjinxiang on 2017-07-18.
 */
public class Client {

    public static void main(String[] args) {
//        User user = new User();
//        user.setName("张三");
//        user.setAddress("北京");
//        user.setAge(18);
//        user.setClazz("hehe");
//        String xml = XMLUtil.objetToXml(user);
//        System.out.println(xml);






        Head head = new Head();
        head.setAppid("ZhsbApp");
        head.setApppass("03D637F3552DC46F55DE27E73571B4F81C5282CA0D66F486");
        head.setAppversion("1.0.0");
        head.setUserid("91140100751525588X");
        head.setUserpass("C715C44466F7D720C9417203F1D93C05");
        head.setDjxh("11140100000000114968");
        head.setNsrsbh("91140100751525588X");
        head.setWebid("Lxb.Cx.NsrdlCheck");
        head.setWebidversion("1.0.20170101");
        head.setTran_seq("42fa5557e35049e699220a745cc0b835");
        head.setTran_date("20170718 10:23:46");
        head.setRtn_code("0000");
        head.setRtn_message("123456");
        head.setRtn_reason("");
        head.setExpands("");
        String headXml = XMLUtil.objetToXml(head);
        System.out.println(headXml);

//        String xml1 = // " <?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>"+
//                "<HEAD>\n" +
//                "  <APPID>ZhsbApp</APPID>\n" +
//                "  <APPPASS>03D637F3552DC46F55DE27E73571B4F81C5282CA0D66F486</APPPASS>\n" +
//                "  <APPVERSION>1.0.0</APPVERSION>\n" +
//                "  <USERID>91140100751525588X</USERID>\n" +
//                "  <USERPASS>C715C44466F7D720C9417203F1D93C05</USERPASS>\n" +
//                "  <djxh>11140100000000114968</djxh>\n" +
//                "  <NSRSBH>91140100751525588X</NSRSBH>\n" +
//                "  <WEBID>Lxb.Cx.NsrdlCheck</WEBID>\n" +
//                "  <WEBIDVERSION>1.0.20170101</WEBIDVERSION>\n" +
//                "  <TRAN_SEQ>42fa5557e35049e699220a745cc0b835</TRAN_SEQ>\n" +
//                "  <TRAN_DATE>20170718 10:23:46</TRAN_DATE>\n" +
//                "  <RTN_CODE>0000</RTN_CODE>\n" +
//                "  <RTN_MESSAGE>123456</RTN_MESSAGE>\n" +
//                "  <RTN_REASON></RTN_REASON>\n" +
//                "  <EXPANDS></EXPANDS>\n" +
//                "</HEAD>";
        headXml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>" + headXml;
        Head head2 = (Head) XMLUtil.xmlToObject(headXml, Head.class);
        System.out.println(head2);
    }
}
