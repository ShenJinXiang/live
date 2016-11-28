/**
 * ±à³ÌÁ·Ï°6.16 µÚ4Ìâ
 */
#include <stdio.h>
int main(void){
	char letter;
	int row;
	printf("please enter a letter:");
	scanf("%c", &letter);
	row = 'A';
	while(row <= letter) {
		int n = 0;
		for(; n < letter - row; n++){
			printf(" ");
		}
		char _l;
		for(_l = 'A'; _l <= row; _l++){
			printf("%c", _l);
		}
		_l -= 2;
		for(;_l >= 'A'; _l--){
			printf("%c", _l);
		}
		printf("\n");
		row++;
	}
	getch();
	return 0;
}
