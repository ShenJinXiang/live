package com.jfinal.token;

import java.util.List;

/**
 * Created by shenjinxiang on 2017-07-13.
 */
public interface ITokenCache {

    void put(Token var1);

    void remove(Token var1);

    boolean contains(Token var1);

    List<Token> getAll();
}
