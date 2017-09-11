package com.xml.sax;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/**
 * Created by shenjinxiang on 2017-07-18.
 */
public class SAXParser extends DefaultHandler {

    @Override
    public void startDocument() throws SAXException {
        super.startDocument();
        System.out.println("SAX解析开始");
    }

    @Override
    public void endDocument() throws SAXException {
        super.endDocument();
        System.out.println("SAX解析结束");
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
        super.startElement(uri, localName, qName, attributes);
        System.out.println("startElement");
        System.out.println("uri -> " + uri);
        System.out.println("localName -> " + localName);
        System.out.println("qName -> " + qName);
        System.out.println("attributes -> " + attributes);
    }

    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException {
        super.endElement(uri, localName, qName);
        System.out.println("endElement");
        System.out.println("uri -> " + uri);
        System.out.println("localName -> " + localName);
        System.out.println("qName -> " + qName);
    }

    @Override
    public void characters(char[] ch, int start, int length) throws SAXException {
        super.characters(ch, start, length);
        System.out.println("characters");
        System.out.println("ch[] -> " + new String(ch));
        System.out.println("start -> " + start);
        System.out.println("length -> " + length);
    }
}
