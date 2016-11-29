/**
 * 编程练习7.12 第6题
 */
#include <stdio.h>
int main(void){
	char ch, pre_ch;
	pre_ch = 'a';
	int cnt = 0;
	printf("Please enter text: \n");
	while((ch = getchar()) != '#') {
		if(ch == 'i' && pre_ch == 'e'){
			cnt++;
		}
		pre_ch = ch;
	}
	printf("in the end 'ei' count : %d.\n", cnt);

	printf("Done~~\n");
	getch();
	return 0;
}
