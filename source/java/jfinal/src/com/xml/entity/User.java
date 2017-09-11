package com.xml.entity;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import com.thoughtworks.xstream.annotations.XStreamAsAttribute;

/**
 * Created by shenjinxiang on 2017-07-18.
 */
@XStreamAlias("USER")
public class User {

    @XStreamAsAttribute
    @XStreamAlias("class")
    private String clazz;

    @XStreamAlias("NAME")
    private String name;

    private int age;

    private String address;

    public String getClazz() {
        return this.clazz;
    }

    public void setClazz(String clazz) {
        this.clazz = clazz;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
