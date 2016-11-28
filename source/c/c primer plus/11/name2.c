/**
 * 程序清单11.5 name2.c
 */

#include <stdio.h>
#define MAX 81
char *gets(char * s);
int main(void)
{
	char name[MAX];
	char * ptr;

	printf("Hi, what's your name?\n");
	ptr = gets(name);
	printf("%s? Ah! %s!\n", name, ptr);

	return 0;
}
