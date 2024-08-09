package main

import (
	"fmt"
)

func main() {
	defer fmt.Println("Bye, Sir!")
	fmt.Println("Hello, Sir!")
	defer fmt.Println("Bye,gfsfsafs Sir!")
	myDefer()
}

func myDefer() {
	for i := 0; i < 5; i++ {
		defer fmt.Println(i)
	}
}
