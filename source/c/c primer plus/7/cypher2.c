/**
 * �����嵥7.3 cypher2.c
 * �ı����� �� ֻ�������ַ��ַ�
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
