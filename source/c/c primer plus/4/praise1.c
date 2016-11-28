/**
 * 程序清单4.2 praise1.c
 */
#include <stdio.h>
#define PRAISE "What a super marvelous name!"

int main(void){
	char name[40];
	printf("What is your name>\n");
	scanf("%s", name);
	printf("Hello, %s. %s", name, PRAISE);
	getch();
	return 0;
}
