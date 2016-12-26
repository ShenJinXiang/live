package com.shenjinxiang.util;

import org.bouncycastle.util.encoders.Base64;

public class BASE64Util {

//	public static String jdkEncode (String str) throws UnsupportedEncodingException {
//		BASE64Encoder encoder = new BASE64Encoder();
//		String result = encoder.encode(str.getBytes("utf-8"));
//		return result;
//	}
//	
//	public static String jdkDecode (String str) {
//		BASE64Decoder decoder = new BASE64Decoder();
//		byte[] buff;
//		try {
//			buff = decoder.decodeBuffer(str);
//			return new String(buff, "utf-8");
//		} catch (Exception e) {
//			e.printStackTrace();
//			return null;
//		}
//	}
//	
//	public static String CommonsCodecEncode(String str) {
//		byte[] bf = Base64.encodeBase64(str.getBytes());
//		return new String(bf);
//	}
//	
//	public static String CommonsCodecDecode (String str) {
//		byte[] buff = Base64.decodeBase64(str.getBytes());
//		try {
//			return new String(buff, "utf-8");
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//			return null;
//		}
//	}
	
	public static String BoucyCostleEncode(String str) {
		byte[] bf = Base64.encode(str.getBytes());
		return new String(bf);
	}
	
	public static String BouncyCostleDecode(String str) {
		byte[] bf = Base64.decode(str);
		return new String (bf);
	}
	
	public static void main(String[] args) {
		String str = "申锦祥";
//		String encode = BASE64Util.jdkEncode(str);
//		String encode1 = BASE64Util.CommonsCodecEncode(str);
		String encode2 = BASE64Util.BoucyCostleEncode(str);
//		System.out.println(encode);
//		System.out.println(encode1);
		System.out.println(encode2);
//		String decode = BASE64Util.jdkDecode(encode);
//		String decode1 = BASE64Util.CommonsCodecDecode(encode1);
		String decode2 = BASE64Util.BouncyCostleDecode(encode2);
//		System.out.println(decode);
//		System.out.println(decode1);
		System.out.println(decode2);
	}
}
