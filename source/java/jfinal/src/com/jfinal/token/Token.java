package com.jfinal.token;

import java.io.Serializable;

/**
 * Created by shenjinxiang on 2017-07-13.
 */
public class Token implements Serializable {

    private String id;
    private long expirationTime;

    Token(String id, long expirationTime) {
        if (id == null) {
            throw new IllegalArgumentException("Token中id不能为null");
        } else {
            this.expirationTime = expirationTime;
            this.id = id;
        }
    }

    Token(String id) {
        if (id == null) {
            throw new IllegalArgumentException("Token中id不能为null");
        } else {
            this.id = id;
        }
    }

    public String getId() {
        return this.id;
    }

    public long getExpirationTime() {
        return this.expirationTime;
    }

    public int hashCode() {
        return this.id.hashCode();
    }

    public boolean equals(Object object) {
        return object instanceof Token
                ? ((Token)object).id.equals(this.getId())
                : false;
    }
}
