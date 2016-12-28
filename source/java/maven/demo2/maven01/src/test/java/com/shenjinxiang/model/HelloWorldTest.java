package com.shenjinxiang.model;

import org.junit.*;
import org.junit.Assert.*;

public class HelloWorldTest {

	public void testHello () {
		Assert.assertEquals("Hello ShenJinXiang!", new HelloWorld().sayHello());
	}
}
