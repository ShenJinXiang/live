/**
 * ±à³ÌÁ·Ï°6.16 µÚ7Ìâ
 */
#include <stdio.h>
void print(float n1, float n2);
int main(void){
	float num1, num2;
	printf("please enter first number:");
	scanf("%f", &num1);
	printf("please enter second number:");
	scanf("%f", &num2);
	print(num1, num2);
	getch();
	return 0;
}

void print(float n1, float n2) {
	printf("%8.2f %8.2f %10.2f\n", n1, n2, (n1 - n2) / (n1 * n2));
}
