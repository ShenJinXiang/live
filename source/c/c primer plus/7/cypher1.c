/**
 * �����嵥7��2
 * �ı�����ֻ�����ո�
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