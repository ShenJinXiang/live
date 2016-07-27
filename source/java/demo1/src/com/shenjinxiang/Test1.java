package com.shenjinxiang;
import com.shenjinxiang.entity.Person;
public class Test1{

	public static void main(String[] args) {
		Person p = new Person();
		p.setAge(12);
		p.setName("张三");
		System.out.println(p.getName());
		System.out.println(p.getAge());
	}
}
