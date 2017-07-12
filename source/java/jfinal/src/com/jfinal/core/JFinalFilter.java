package com.jfinal.core;

import javax.servlet.*;
import java.io.IOException;

/**
 * Created by shenjinxiang on 2017-07-12.
 */
public class JFinalFilter implements Filter {

    public JFinalFilter() {}

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

    }

    @Override
    public void destroy() {

    }

    private void createJFinalConfig(String configClass) {

    }
}
