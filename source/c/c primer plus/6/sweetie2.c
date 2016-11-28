/**
 * 程序清单6.11 sweetie2.c
 * 使用for循环
 */
#include <stdio.h>
int main(void){
	const int NUMBER = 22;
	int count;
	for(count = 1; count <= NUMBER; count++ ){
		printf("%2d: Be my valentine!\n", count);
	}
	return 0;
}
