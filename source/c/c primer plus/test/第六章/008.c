/**
 * ±à³ÌÁ·Ï°6.16 µÚ9Ìâ
 */
#include <stdio.h>
int main(void){
	int max, min, i;
	int result, sum;
	printf("Enter lower and upper integer limits: ");
	result = scanf("%d%d", &min, &max);
	while(result) {
		sum = 0;
		for(i = min; i <= max; i++){
			sum += i * i;
		}
		printf("The sums of the squares from %d to %d is %d.\n", min * min, max * max, sum);
		printf("Enter next set of limits: ");
		result = scanf("%d%d", &min, &max);
	}
	printf("Done~~~");
	getch();
	return 0;
}
