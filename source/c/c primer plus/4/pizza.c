/**
 * 程序清单4.4 pizza.c
 */
#include <stdio.h>
#define PI 3.1415926
int main(void){
	float area, circum, radius;

	printf("What is the radius of your pizza?\n");
	scanf("%f", &radius);
	area = PI * radius * radius;
	circum = 2 * PI * radius;
	printf("your basic pizza parameter are as follows: \n");
	printf("circumference = %1.2f, area = %1.2f\n", circum, area);

	getch();
	return 0;
}
