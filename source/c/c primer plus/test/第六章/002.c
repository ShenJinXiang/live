/**
 * ±à³ÌÁ·Ï°6.16 µÚ1Ìâ
 */
#include <stdio.h>
int main(void){
	const int SIZE = 26;
	int i;
	char ch;
	char letter[SIZE];
	for(i= 0, ch = 'a'; i < SIZE; ch++, i++) {
		letter[i] = ch;
	}
	for(i = 0; i < SIZE; i++) {
		printf("%d: %c\n", letter[i], letter[i]);
	}
	return 0;
}
