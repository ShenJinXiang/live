/**
 * 程序清单3.5 charcode.c
 */
#include <stdio.h>
int main(void){
	char ch;
	printf("Please enter a charact.\n");
	scanf("%c", &ch);
	printf("The code for %c is %d.\n", ch, ch);
	getch();
	return 0;
}
