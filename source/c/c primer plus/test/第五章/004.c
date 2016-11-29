/**
 * ±à³ÌÁ·Ï°5.11 µÚ3Ìâ
 */
#include <stdio.h>
int main(void){
	const int WEEK_DAYS = 7;
	int days;
	int ws, ds;
	printf("please enter days :");
	scanf("%d", &days);
	ws = days / WEEK_DAYS;
	ds = days % WEEK_DAYS;
	printf("%d days are %d weeks, %d days.\n", days, ws, ds);
	getch();
	return 0;
}
