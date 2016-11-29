/**
 * ±à³ÌÁ·Ï°6.16 µÚ13Ìâ
 */
#include <stdio.h>
int main(void){
	const int SIZE = 8;
	int arr1[SIZE], arr2[SIZE];
	int i;
	printf("enter numbers:¡¡");
	for(i = 0; i < SIZE; i++) {
		scanf("%d", &arr1[i]);
	}
	arr2[0] = arr1[0];
	for(i = 1; i < SIZE; i++){
		arr2[i] = arr2[i - 1] + arr1[i];
	}
	printf("\n------------------------------------------------\n");
	for(i = 0; i < SIZE; i++) {
		printf("%10d", arr1[i]);
	}
	printf("\n------------------------------------------------\n");
	for(i = 0; i < SIZE; i++) {
		printf("%10d", arr2[i]);
	}
	getch();
	return 0;
}
