/**
 * 程序清单3.3 bases.c
 * 以十进制、八进制、十六进制输出
 */
#include <stdio.h>
int main(void){
	int x;
	printf("请输入整数：");
	scanf("%d", &x);
	printf("dec = %d, octal = %o, hex = %x\n", x, x, x);
	printf("dec = %d, octal = %#o, hex = %#x\n", x, x, x);
	getch();
	return 0;
}
