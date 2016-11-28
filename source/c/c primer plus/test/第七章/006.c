/**
 * 7.12 编程练习 第2题
 */
#include <stdio.h>
int main(void){
	char ch;
	printf("Please enter text:\n");
	while((ch = getchar()) != '\n') {
		printf("%3c%5d\t", ch, ch);
	}
	putchar('\n');
	printf("done~~~");
	getch();
	return 0;
}
