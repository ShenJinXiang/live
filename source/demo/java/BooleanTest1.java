public class BooleanTest1 {
	public static void main(String[] args) {
		boolean b1 = new Boolean(true);
		boolean b2 = new Boolean(true);

		boolean b3 = Boolean.valueOf(false);
		boolean b4 = Boolean.valueOf(false);
		System.out.println("b1 == b2 :" + (b1 == b2));
		System.out.println("b3 == b4 :" + (b3 == b4));
	}
}
