package com.xml.sax;

import javax.xml.parsers.SAXParserFactory;
import java.io.ByteArrayInputStream;
import java.io.InputStream;

/**
 * Created by shenjinxiang on 2017-07-18.
 */
public class Client {

    public static void main(String[] args) {
        String xml = "<HEAD>\n" +
                "  <APPID>ZhsbApp</APPID>\n" +
                "  <APPPASS>03D637F3552DC46F55DE27E73571B4F81C5282CA0D66F486</APPPASS>\n" +
                "  <APPVERSION>1.0.0</APPVERSION>\n" +
                "  <USERID>91140100751525588X</USERID>\n" +
                "  <USERPASS>C715C44466F7D720C9417203F1D93C05</USERPASS>\n" +
                "  <djxh>11140100000000114968</djxh>\n" +
                "  <NSRSBH>91140100751525588X</NSRSBH>\n" +
                "  <WEBID>Lxb.Cx.NsrdlCheck</WEBID>\n" +
                "  <WEBIDVERSION>1.0.20170101</WEBIDVERSION>\n" +
                "  <TRAN_SEQ>42fa5557e35049e699220a745cc0b835</TRAN_SEQ>\n" +
                "  <TRAN_DATE>20170718 10:23:46</TRAN_DATE>\n" +
                "  <RTN_CODE>0000</RTN_CODE>\n" +
                "  <RTN_MESSAGE>123456</RTN_MESSAGE>\n" +
                "  <RTN_REASON></RTN_REASON>\n" +
                "  <EXPANDS></EXPANDS>\n" +
                "</HEAD>";
        SAXParserFactory factory = SAXParserFactory.newInstance();
        try {
            javax.xml.parsers.SAXParser parser = factory.newSAXParser();
            InputStream inputStream = new ByteArrayInputStream(xml.getBytes());
            parser.parse(inputStream, new SAXParser());
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("解析错误");
        }
    }
}
