package com.shenjinxiang.demo;

public class VarargusTest {
	
	public static void printArgs(int... is) {
		System.out.println("printArgs(int...)");
	}
	
	public static void printArgs(int a, int b) {
		System.out.println("printArgs(int, int)");
	}

	public static void main(String[] args) {
		printArgs();
		printArgs(1, 2);
		printArgs(11, 22, 33);
	}
}
