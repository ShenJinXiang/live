/**
 * 7.12 编程练习 第1题
 */
#include <stdio.h>

int main(void){
	char ch;
	int k_ct, h_ct, q_ct;
	k_ct = h_ct = q_ct = 0;
	printf("Please enter text: (# to quit)\n");
	while((ch = getchar()) != '#') {
		if(ch == ' '){
			k_ct++;
		} else if (ch == '\n') {
			h_ct++;
		} else {
			q_ct++;
		}
	}
	printf("%8d %8d %8d\n", k_ct, h_ct, q_ct);
	printf("done~~");
	getch();
	return 0;
}
