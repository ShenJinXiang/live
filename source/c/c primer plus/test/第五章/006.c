/**
 * ±à³ÌÁ·Ï°5.11 µÚ7Ìâ
 */
#include <stdio.h>
void print3(float num);
int main(void){
	float num;
	printf("input a number:");
	scanf("%f", &num);
	print3(num);
	getch();
	return 0;
}

void print3(float num){
	float num1 = num * num * num;
	printf("%.2f: %10.2f\n", num, num1);
}
