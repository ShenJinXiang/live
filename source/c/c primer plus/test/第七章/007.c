/**
 * 7.12 编程练习 第3题
 * 输入整数 输入0终止 统计偶数总个数 平均值 奇数总个数 平均值
 */
#include <stdio.h>

int main(void){
	int num;
	int oCnt, jCnt, oSum, jSum;
	float oAvg, jAvg;
	oCnt = jCnt = oSum = jSum = 0;
	printf("Please enter a number: \n");
	scanf("%d", &num);
	while(num != 0) {
		if(num % 2 == 0) {
			oCnt++;
			oSum += num;
		} else {
			jCnt++;
			jSum += num;
		}
		printf("Please enter next number: \n");
		scanf("%d", &num);
	}
	oAvg = (oCnt > 0) ? (oSum * 1.0 / oCnt) : 0;
	jAvg = (jCnt > 0) ? (jSum * 1.0 / jCnt) : 0;
	printf("oushu count: %d, sum: %d, avg: %.2f\n", oCnt, oSum, oAvg);
	printf("jishu count: %d, sum: %d, avg: %.2f\n", jCnt, jSum, jAvg);
	printf("done~~~\n");
	getch();
	return 0;
}
