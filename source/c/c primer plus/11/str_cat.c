/**
 * ≥Ã–Ú«Âµ• 11°£14 str_cat.c
 */
#include <stdio.h>
#include <String.h>
#define SIZE 80
int main(void)
{
	char flower[SIZE];
	char addon[] = "s smell like old shoes.";

	puts("What is your favorite flower?");
	gets(flower);
	strcat(flower, addon);
	puts(flower);
	puts(addon);

	return 0;
}
