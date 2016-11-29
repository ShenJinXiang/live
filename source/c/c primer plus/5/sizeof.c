/**
 * 程序清单5.8 sizeof.c
 * 使用sizeof运算符
 */
#include <stdio.h>
int main(void){
	int n = 0;
	size_t intsize;
	intsize = sizeof(int);
	printf("n = %d, n has %lu bytes: all ints have %lu bytes.\n", n, sizeof n, intsize);
	return 0;
}
