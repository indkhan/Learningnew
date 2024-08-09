package main

import "fmt"

func main() {
	fmt.Println("Hello, Array!")

	var fruitList [4]string
	fruitList[0] = "Apple"
	fruitList[1] = "Orange"

	fruitList[3] = "Peach"
	fmt.Println("fruit list is ", fruitList)

	var veglist = [3]string{"Potato hi there", "Beans", "Okra"}

	fmt.Println("veggy list is ", veglist)
}
