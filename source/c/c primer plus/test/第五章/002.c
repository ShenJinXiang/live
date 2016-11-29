/**
 * 5.11 编程练习 第1题
 */
#include <stdio.h>
int main(void){
	const int mh = 60;
	int m;
	int hs, ms;
	printf("input minute:");
	scanf("%d", &m);
	while(m > 0) {
		hs = m / mh;
		ms = m % mh;
		printf("%d minutes = %d hours %d minutes!\n", m, hs, ms);
		printf("input nimute:");
		scanf("%d", &m);
	}
	getch();
	return 0;
}
