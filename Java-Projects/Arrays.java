import java.util.*;

public class Arrays {
    public static void main(String args[]) {
        System.out.println("enter the size of the array you want");
        Scanner sc = new Scanner(System.in);

        int size = sc.nextInt();
        int numbers[] = new int[size];
        for (int x = 0; x < size; x++) {
            System.out.println("Enter the integer for the array");

            int num = sc.nextInt();
            numbers[x] = num;

        }
        
        int y = 4;
        for(int i=0; i<size; i++) {
            if(numbers[i] == y) {

                System.out.println("found at index : "+i);
                System.out.println("Good new hope you like it ");

                
            }}



        for(int i=0; i<size; i++) {
            System.out.println(numbers[i]);
        }
        System.out.println("the length of this array is of size : "+numbers.length);
    }
}
