/**
 * 测试
 */
#include <stdio.h>
int main(void){
	int num1, num2;
	printf("first number: ");
	scanf("%d", &num1);
	printf("second number: ");
	scanf("%d", &num2);
	printf("%d + %d = %d.\n", num1, num2, num1 + num2);
	getch();
	return 0;
}
