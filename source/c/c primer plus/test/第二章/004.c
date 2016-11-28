/**
 * 2.12 编程练习 第4题
 * 自定义两个函数
 */
#include <stdio.h>
void func1(void);
void func2(void);
int main(void){
	func1();
	func1();
	func1();
	func1();
	func2();
	return 0;
}

void func1(void){
	printf("For he's a jolly good fellow!\n");
}

void func2(void){
	printf("Which nobody can deny!\n");
}
