/**
 * 程序清单8.1 echo.c
 * 重复输入
 */
#include <stdio.h>
int main(void){
	char ch;
	while((ch = getchar()) != '#')
		putchar(ch);
	printf("\nDone~~~");
	getch();
	return 0;
}
