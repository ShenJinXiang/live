/**
 * 程序清单9.8 binary.c
 */
#include <stdio.h>

void to_binary(int n);

int main(void)
{
	int number;
	printf("Enter an integer(q to quit): \n");
	while(scanf("%d", &number) == 1){
		printf("Binary equivalent: ");
		to_binary(number);
		putchar('\n');
		printf("Enter an integer (q to quit): \t");
	}
	printf("Done.\n");

	return 0;
}

void to_binary(int n)
{
	int r;
	r = n % 2;
	if(n >= 2)
		to_binary(n / 2);
	putchar('0' + r);

	return;
}
