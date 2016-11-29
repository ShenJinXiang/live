/**
 * 程序清单 8.2 echo_eof.c
 * 重复输入，知道文件的结尾
 */
#include <stdio.h>
int main(void){
	int ch;
	while((ch = getchar()) != EOF)
		putchar(ch);
	printf("\ndone~~~\n");
	getch();
	return 0;
}
