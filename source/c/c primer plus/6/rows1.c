/**
 * �����嵥6.17 rows1.c
 * ʹ��Ƕ��ѭ��
 */
#include <stdio.h>
#define ROWS 6
#define CHARS 26
int main(void) {
	int row;
	char ch;
	for(row = 0; row < ROWS; row++) {
		for(ch = 'A'; ch < ('A' + CHARS); ch++) {
			printf("%c", ch);
		}
		printf("\n");
	}
	return 0;
}