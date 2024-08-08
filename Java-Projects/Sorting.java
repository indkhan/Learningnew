
class Sorting {

  public static void printArray(int arr[]) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  /* 
  public static void main(String args[]) {
  int arr[] = { 7, 6, 8, 5, 3 };
  //bubble sort
  for (int i = 0; i < arr.length - 1; i++) {
  for (int j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      int temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  }
  
  
  printArray(arr);
  }*/
/* 
public static void main(String args[]) {
  int arr[] = { 7, 6, 8, 5, 3 };

  //selection sort

  for (int i = 0; i < arr.length - 1; i++) {
    int min = i;
    for (int j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    int temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

    printArray(arr);
  
}
    */
      
  public static void main(String args[]) {
  int arr[] = { 7, 6, 8, 5, 3 ,6};

  //insertion sort

  for (int i = 1; i < arr.length; i++) {
    int key = arr[i];
    int j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  printArray(arr);
  }








}