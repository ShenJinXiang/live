#include <stdio.h>
int main(void){
	int num;
	float num1;
	printf("please enter number: ");
	scanf("%d", &num);
	printf("enter float number: ");
	scanf("%f", &num1);
	printf("number: %d\n", num);
	printf("number: %10d\n", num);
	printf("number: %010d\n", num);

	printf("------------------");
	printf("number: %f\n", num1);
	printf("number: %10f", num1);
	printf("number: %10.2f", num1);
	printf("number: %010.2f", num1);
	getch();
	return 0;
}
