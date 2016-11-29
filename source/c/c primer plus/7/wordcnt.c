/**
 * 程序清单7.7 wordcnt.c
 * 统计字符、单词和行
 */
#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>
#define STOP '|'

int main(void){
	char c;
	char prev;
	long n_chars = 0L;
	int n_lines = 0;
	int n_words = 0;
	int p_lines = 0;
	bool inword = false;

	printf("Enter text to be analyzed('| to terminate'): \n");
	prev = '\n';
	while ((c = getchar()) != STOP) {
		n_
	}
	return 0;
}
