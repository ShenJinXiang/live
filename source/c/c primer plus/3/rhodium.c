/**
 * rhodium.c
 * 用金属铑衡量体重
 */
#include <stdio.h>
int main(void){
	float weight; // 用户体重
	float value; // 相等重量的铑的价值
	printf("Are you worth your weight in rhodium?\n");
	printf("Let's check it out.\n");
	printf("Please enter your weight in pounds: ");

	/* 从用户处获取输入 */
	scanf("%f", &weight);

	value = 770 * weight *14.5833;
	printf("Your weight in rhodium is worth $%.2f.\n", value);
	printf("You are easily worth that! If rhodium prices drop. \n");
	printf("eat more to maintain your value.\n");
	getch();
	return 0;
}
