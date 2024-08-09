package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")

	//var ptr *int

	//fmt.Println("Value of the pointer is ", ptr)
	myNumber := 10
	var ptr = &myNumber
	fmt.Println("Value of the pointer is ", ptr)
	fmt.Println("value fo the number is ", myNumber)
	fmt.Println("value fo the number pointer is ", *ptr)

	*ptr = *ptr + 10
	fmt.Println("value fo the number pointer is ", *ptr)
	fmt.Println("value fo the number is ", myNumber)

}
