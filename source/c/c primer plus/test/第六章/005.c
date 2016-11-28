/**
 * ±à³ÌÁ·Ï°6.16 µÚ5Ìâ
 */
#include <stdio.h>
int main(void){
	int max, min, index;
	printf("Please enter the min number: ");
	scanf("%d", &min);
	printf("enter the max number: ");
	scanf("%d", &max);
	for(index = min; index <= max; index++){
		printf("%4d%8d%8d\n", index, index * index, index * index * index);
	}
	getch();
	return 0;
}
