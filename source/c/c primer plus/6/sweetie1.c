/**
 * 程序清单6.10 sweetie1.c
 * 计数循环
 */
#include <stdio.h>
int main(void) {
	const int NUMBER = 22;
	int count = 1;
	while(count <= NUMBER) {
		printf("%2d: Be my valentine!\n", count);
		count++;
	}

	return 0;
}
