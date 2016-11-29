/**
 * 程序清单9.12 loccheck.c
 */
#include <stdio.h>
void mikado(int);

int main(void)
{
	int pooh = 2, bah = 5;
	printf("In main(), pooh = %d &pooh = %p\n", pooh, &pooh);
	printf("In main(), bah = %d &bah = %p\n", bah, &bah);
	mikado(pooh);
	return 0;
}

void mikado(int bah)
{
	int pooh = 10;
	printf("In mikado(), pooh = %d &pooh = %p\n", pooh, &pooh);
	printf("In mikado(), bah = %d &bah = %p\n", bah, &bah);
}
