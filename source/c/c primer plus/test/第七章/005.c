/**
 * 7.12 编程练习 第1题 使用switch
 */
#include <stdio.h>

int main(void){
	char ch;
	int k_ct, h_ct, q_ct;
	k_ct = h_ct = q_ct = 0;
	printf("Please enter text: (# to quit)\n");
	while((ch = getchar()) != '#') {
		switch(ch) {
			case ' ':
				k_ct++;
				break;
			case '\n':
				h_ct++;
				break;
			default:
				q_ct++;
		}
	}
	printf("%8d %8d %8d\n", k_ct, h_ct, q_ct);
	printf("done~~");
	getch();
	return 0;
}

