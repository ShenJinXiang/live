/**
 * 2.12 编程练习 第5题
 * 创建名为toes的整数变量，初始化10，计算两个toes的和，以及toes的平方
 */
#include <stdio.h>
int main(void){
	int toes, he, pingfang;
	toes = 10;
	he = toes + toes;
	pingfang = toes * toes;
	printf("toes: %d, 和: %d, 平方: %d\n", toes, he, pingfang);
	return 0;
}
