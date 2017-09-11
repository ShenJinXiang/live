package com.xml.entity;

import com.thoughtworks.xstream.annotations.XStreamAlias;

/**
 * Created by shenjinxiang on 2017-07-18.
 */
@XStreamAlias("HEAD")
public class Head {

    @XStreamAlias("APPID")
    private String appid;

    @XStreamAlias("APPPASS")
    private String apppass;

    @XStreamAlias("APPVERSION")
    private String appversion;

    @XStreamAlias("USERID")
    private String userid;

    @XStreamAlias("USERPASS")
    private String userpass;

    private String djxh;

    @XStreamAlias("NSRSBH")
    private String nsrsbh;

    @XStreamAlias("WEBID")
    private String webid;

    @XStreamAlias("WEBIDVERSION")
    private String webidversion;

    @XStreamAlias("TRAN_SEQ")
    private String tran_seq;

    @XStreamAlias("TRAN_DATE")
    private String tran_date;

    @XStreamAlias("RTN_CODE")
    private String rtn_code;

    @XStreamAlias("RTN_MESSAGE")
    private String rtn_message;

    @XStreamAlias("RTN_REASON")
    private String rtn_reason;

    @XStreamAlias("EXPANDS")
    private String expands;

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getApppass() {
        return apppass;
    }

    public void setApppass(String apppass) {
        this.apppass = apppass;
    }

    public String getAppversion() {
        return appversion;
    }

    public void setAppversion(String appversion) {
        this.appversion = appversion;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getUserpass() {
        return userpass;
    }

    public void setUserpass(String userpass) {
        this.userpass = userpass;
    }

    public String getDjxh() {
        return djxh;
    }

    public void setDjxh(String djxh) {
        this.djxh = djxh;
    }

    public String getNsrsbh() {
        return nsrsbh;
    }

    public void setNsrsbh(String nsrsbh) {
        this.nsrsbh = nsrsbh;
    }

    public String getWebid() {
        return webid;
    }

    public void setWebid(String webid) {
        this.webid = webid;
    }

    public String getWebidversion() {
        return webidversion;
    }

    public void setWebidversion(String webidversion) {
        this.webidversion = webidversion;
    }

    public String getTran_seq() {
        return tran_seq;
    }

    public void setTran_seq(String tran_seq) {
        this.tran_seq = tran_seq;
    }

    public String getTran_date() {
        return tran_date;
    }

    public void setTran_date(String tran_date) {
        this.tran_date = tran_date;
    }

    public String getRtn_code() {
        return rtn_code;
    }

    public void setRtn_code(String rtn_code) {
        this.rtn_code = rtn_code;
    }

    public String getRtn_message() {
        return rtn_message;
    }

    public void setRtn_message(String rtn_message) {
        this.rtn_message = rtn_message;
    }

    public String getRtn_reason() {
        return rtn_reason;
    }

    public void setRtn_reason(String rtn_reason) {
        this.rtn_reason = rtn_reason;
    }

    public String getExpands() {
        return expands;
    }

    public void setExpands(String expands) {
        this.expands = expands;
    }
}
