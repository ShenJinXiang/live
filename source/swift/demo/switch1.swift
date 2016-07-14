/**
 * x^4 - y^2 = 15 * x * y
 * 在300以内的一个正整数解
 */

 for m in 1...300 {
	for n in 1...300{
		if m * m * m * m - n * n == 15 * m * n {
			print(m, n)
		}
	}
 }

 findAnswer:for m in 1...300 {
     for n in 1...300 {
		 if m * m * m * m - n * n == 15 * m * n {
			 print(m, n)
			 break findAnswer
		 }
	 }
 }
