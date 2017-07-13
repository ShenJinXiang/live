package com.jfinal.core;

import com.jfinal.render.ViewType;

import java.io.File;

/**
 * Created by shenjinxiang on 2017-07-13.
 */
public interface Const {
    String JFINAL_VERSION = "2.0";
    ViewType DEFAULT_VIEW_TYPE = ViewType.FREE_MARKER;
    String DEFAULT_ENCODING = "UTF-8";
    boolean DEFAULT_DEV_MODE = false;
    String DEFAULT_URL_PARA_SEPARATOR = "-";
    String DEFAULT_JSP_EXTENSION = ".jsp";
    String DEFAULT_FREE_MARKER_EXTENSION = ".html";
    String DEFAULT_VELOCITY_EXTENSION = ".vm";
    String DEFAULT_FILE_RENDER_BASE_PATH = File.separator + "download" + File.separator;
    int DEFAULT_MAX_POST_SIZE = 10485760;
    int DEFAULT_I18N_MAX_AGE_OF_COOKIE = 999999999;
    int DEFAULT_FREEMARKER_TEMPLATE_UPDATE_DELAY = 3600;
    String DEFAULT_TOKEN_NAME = "jfinal_token";
    int DEFAULT_SECONDS_OF_TOKEN_TIME_OUT = 900;
    int MIN_SECONDS_OF_TOKEN_TIME_OUT = 300;
}
