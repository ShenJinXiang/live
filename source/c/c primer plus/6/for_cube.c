/**
 * 程序清单6.12 for_cube.c
 * 立方
 */
#include <stdio.h>
int main(void){
	int num;
	printf("     n     n cubed\n");
	for(num = 1; num <= 6; num++){
		printf("%5d %5d\n", num, num * num * num);
	}
	return 0;
}
