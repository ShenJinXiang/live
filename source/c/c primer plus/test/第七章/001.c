#include <stdio.h>

int main(void){
	char ch;
	printf("Please enter letters: \n");
	ch = getchar();
	while(ch != '\n'){
		putchar(ch);
		ch = getchar();
	}
	putchar(ch);
	printf("done~~~\n");
	getch();
	return 0;
}
