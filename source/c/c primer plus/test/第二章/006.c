/**
 * 2.12 编程练习 第6题
 * 打印 Smile! 第一行三次 第二行两次 第三行一次
 */
#include <stdio.h>
void printSmile(void);

int main(void){
	printSmile();
	printSmile();
	printSmile();
	printf("\n");
	printSmile();
	printSmile();
	printf("\n");
	printSmile();
	return 0;
}

void printSmile(void){
	printf("Simle!");
}
