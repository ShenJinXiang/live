/**
 * 程序清单5.4 squares.c
 * 前20个整数的平方表
 */
#include <stdio.h>
int main(void){
	int num = 1;
	while (num <= 20) {
		printf("%4d *%3d = %6d\n", num, num, num * num);
		num = num + 1;
	}
	return 0;
}
