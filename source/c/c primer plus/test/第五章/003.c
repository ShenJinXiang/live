/**
 * 编程练习5.11 第2题
 */
#include <stdio.h>
int main(void) {
	int num, count;
	printf("please enter a number:");
	scanf("%d", &num);
	count = num;
	while(count++ < num + 100) {
		printf("%8d", count);
	}
	getch();
	return 0;
}
