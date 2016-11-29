/**
 * 程序清单2.3
 * two_func.c 在一个文件中使用两个函数
 */
#include <stdio.h>
void butler(void);

int main(void)
{
	printf("I will summon the butier function.\n");
	butler();
	printf("Yes. Bring me som tea and writeable CD-ROMS.\n");
	return 0;
}

void butler(void)
{
	printf("You rang, sir?\n");
}
