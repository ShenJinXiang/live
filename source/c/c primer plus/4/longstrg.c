/**
 * 程序清单4.14 longstrg.c
 * 打印较长的字符串
 */
#include <stdio.h>
int main(void){
	printf("Here's one way to print a ");
	printf("long string.\n");
	printf("Here's another way to print a \
long string.\n");
	printf("Here's the newest way to print a "
			"long string.\n");

	printf("--------------------------------\n");
	printf("Hello, young lovers, wherever you are.\n");
	printf("Hello, young" "lovers" ", wherever you are.\n");
	printf("Hello. young lovers"
			", wherever you are.\n");
	return 0;
}
