#include <stdio.h>
int imax(int, int);

int main(void)
{
	int num1, num2;
	printf("请输入两个整数：\n");
	while(scanf("%d %d", &num1, &num2) == 2){
		printf("%d 和 %d 中%d 比较大！\n", num1, num2, imax(num1, num2));
		printf("请继续输入两个整数：\n");
	}
	return 0;
}

int imax(int a, int b)
{
	return (a > b) ? a : b;
}
