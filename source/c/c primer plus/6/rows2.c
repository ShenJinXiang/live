/**
 * 程序清单6.18 rows2.c
 * 内部循环依赖于外部循环
 */
#include <stdio.h>
int main(void) {
	const int ROWS = 26;
	const int CHARS = 26;
	int row;
	char ch;
	for(row = 0; row < ROWS; row++ ) {
		for(ch = ('A' + row); ch < ('A' + CHARS); ch++) {
			printf("%c", ch);
		}
		printf("\n");
	}
	return 0;
}
