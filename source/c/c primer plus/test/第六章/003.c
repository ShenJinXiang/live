/**
 * �����ϰ6.16 ��2��
 */
#include <stdio.h>
int main(void){
	const int ROWS = 9;
	const int COLS = 9;
	int i, j;
	for(i = 0; i < ROWS; i++){
		for(j = 0; j < i; j++){
			printf("$");
		}
		printf("\n");
	}
	return 0;
}
