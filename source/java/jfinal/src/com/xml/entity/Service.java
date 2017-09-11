package com.xml.entity;

import com.thoughtworks.xstream.annotations.XStreamAlias;

/**
 * Created by shenjinxiang on 2017-07-18.
 */
@XStreamAlias("service")
public class Service {

    @XStreamAlias("HEAD")
    private Head head;

    @XStreamAlias("BODY")
    private Body body;

    public Head getHead() {
        return head;
    }

    public void setHead(Head head) {
        this.head = head;
    }

    public Body getBody() {
        return body;
    }

    public void setBody(Body body) {
        this.body = body;
    }
}
