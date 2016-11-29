/**
 * ±à³ÌÁ·Ï°6.16 µÚ10Ìâ
 */
#include <stdio.h>
int main(void){
	const int SIZE = 8;
	int arr[SIZE], i;
	printf ("enter numbers: ");
	for(i = 0; i < SIZE; i++){
		scanf("%d", &arr[i]);
	}
	printf("\n-------------------------\n");
	for(i = 0; i < SIZE; i++) {
		printf("%8d", arr[i]);
	}
	printf("\n-------------------------\n");
	for(i = SIZE - 1; i >=0 ; i--) {
		printf("%8d", arr[i]);
	}
	getch();
	return 0;
}
