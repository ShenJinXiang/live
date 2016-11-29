#include <stdio.h>
int main(void)
{
	char heart[] = "I love Tillie!";
	char *head = "I love Millie!";
	int i;
	for(i = 0; i < 6; i++){
		putchar(heart[i]);
	}
	printf("\n-----------------------------------\n");

	for(i = 0; i < 6; i++){
		putchar(head[i]);
	}
	printf("\n***********************************\n");
	for(i = 0; i < 6; i++){
		putchar(*(heart + i));
	}
	printf("\n-----------------------------------\n");
	for(i = 0; i < 6; i++){
		putchar(*(head + i));
	}
	printf("\n***********************************\n");
	return 0;
}
