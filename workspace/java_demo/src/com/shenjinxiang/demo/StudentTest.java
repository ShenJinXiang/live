package com.shenjinxiang.demo;

import java.lang.reflect.Field;

public class StudentTest {

	public static void main(String[] args) {
		try {
			Class stuClass = Class.forName("com.shenjinxiang.entity.Student");
			System.out.println(stuClass.getName());
//			Field[] fields = stuClass.getFields();
			Field[] fields = stuClass.getDeclaredFields();
			for(Field f : fields) {
				System.out.println(f.getType().getName() + " " + f.getName());
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
}
