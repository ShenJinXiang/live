/**
 * 程序清单7.3 cypher2.c
 * 改变输入 ， 只保留非字符字符
 */
#include <stdio.h>
#include <ctype.h>
int main(void){
	char ch;
	while((ch = getchar()) != '\n') {
		if(isalpha(ch))
			putch(ch + 1);
		else 
			putch(ch);
	}
	putchar(ch);
	getch();
	return 0;
}
