/**
 * ±à³ÌÁ·Ï°6.16 µÚ6Ìâ
 */
#include <stdio.h>
#include <string.h>
int main(void){
	char letter[50];
	printf("Please enter a word: ");
	scanf("%s", letter);
	/*
	printf("content: %s\n", letter);
	printf("strlen: %d\n", strlen(letter));
	*/
	int i;
	for(i = strlen(letter) - 1; i >= 0; i--) {
		printf("%c", letter[i]);
	}
	printf("\n");
	getch();
	return 0;
}
