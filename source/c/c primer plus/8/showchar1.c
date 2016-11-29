/**
 * �����嵥8.5 showchar1.c
 * ����һ���ϴ��I/O����ĳ���
 */
#include <stdio.h>
void display (char cr, int lines, int width);

int main(void){
	int ch;
	int rows, cols;
	printf("Enter a character and two integers: \n");
	while((ch = getchar()) != '\n'){
		scanf("%d %d", &rows, &cols);
		display(ch, rows, cols);
		printf("enter another character and two integers: \n");
		printf("Enter a newline to quit. \n");
	}
	printf("Bye.\n");
	getch();
	return 0;
}

void display(char cr, int lines, int width) {
	int row, col;
	for(row = 1; row <= lines; row++){
		for(col = 1; col <= width; col++)
			putchar(cr);
		putchar('\n');
	}
}
