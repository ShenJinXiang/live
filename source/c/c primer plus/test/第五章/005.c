/**
 * ±à³ÌÁ·Ï°5.11 µÚ5Ìâ
 */
#include <stdio.h>
int main(void){
	int num;
	int count = 1;
	int sum = 0;
	printf("please enter a number:");
	scanf("%d", &num);
	printf("num: %d.\n", num);
	while(count <= num) {
		sum += count;
		printf("%4d: %8d %8d;\n", count, sum, count * count);
		count++;
	}
	getch();
	return 0;
}
