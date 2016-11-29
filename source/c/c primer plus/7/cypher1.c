/**
 * 程序清单7。2
 * 改变输入只保留空格
 */
#include <stdio.h>
#define SPACE ' '
int main(void){
	char ch;
	ch = getchar();
	while(ch != '\n') {
		if(ch == SPACE)
			putchar(ch);
		else
			putchar(ch + 1);
		ch = getchar();
	}
	putchar(ch);
	getch();
	return 0;
}
