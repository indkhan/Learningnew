import java.util.*;

public class darray {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("enter the size of the rows  array you want");
        int rows = sc.nextInt();
        System.out.println("Enter the size of columns in the array");
        int cols = sc.nextInt();

        int[][] numbers = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                numbers[i][j] = sc.nextInt();
            }
        }


        int y = 4;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (numbers[i][j] == y) {

                    System.out.println("found at index : " + i + j);

                }
            }
        }
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print(numbers[i][j] + " ");
            }
            System.out.println();
        }
    }
}