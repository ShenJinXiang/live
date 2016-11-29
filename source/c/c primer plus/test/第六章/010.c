/**
 * ±à³ÌÁ·Ï°6.16 µÚ12Ìâ
 */
#include <stdio.h>
#include <math.h>
int main(void){
	const int SIZE = 8;
	int i, arr[SIZE];
	printf("start init~~~\n");
	for(i = 0; i < SIZE; i++) {
		arr[i] = pow(2, i);
	}
	printf("com~~~\n");
	i = 0;
	do{
		printf("%5d", arr[i]);
		i++;
	} while(i < SIZE);
	printf("\nend~~~");
	getch();
	return 0;
}
