package com.jfinal.config;

import com.jfinal.render.ViewType;
import com.jfinal.token.ITokenCache;

import java.util.Map;

/**
 * Created by shenjinxiang on 2017-07-13.
 */
public final class Constants {
    private String fileRenderPath;
    private String uploadeFileSaveDirectory;
    private boolean devMode = false;
    private String encoding = "UTF-8";
    private String urlParaSeparator = "-";
    private ViewType viewType;
    private String jspViewExtension;
    private String freeMarkerViewExtension;
    private String velocityViewExtension;
    private int maxPostSize;
    private ITokenCache tokenCache;
    private Map<Integer, String> errorViewMapping;
}