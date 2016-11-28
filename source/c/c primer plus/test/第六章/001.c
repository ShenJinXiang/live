/**
 * 练习 嵌套循环
 */
#include <stdio.h>
int main(void){
	int i, j;
	for (i = 0; i < 9; i++){
		for(j = 0; j < 9; j++){
			printf("$");
		}
		printf("\n");
	}
	return 0;
}
