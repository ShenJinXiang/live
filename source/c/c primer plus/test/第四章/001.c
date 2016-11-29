/**
 * strlen() 函数
 */
#include <stdio.h>
#include <string.h>
int main(void) {
	char name[50];
	printf("input name: ");
	scanf("%s", name);
	printf("your name is : %s.\n", name);
	printf("sizeof : %d, letters: %d\n", sizeof name, strlen(name));
	getch();
	return 0;
}
