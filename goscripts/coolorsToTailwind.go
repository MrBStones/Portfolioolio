package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

// usage:
// arg 1 should be a coolors link, or the end of one.
// The 5 last args should be the type of the colors
// 0 = 'background'
// 1 = 'dark'
// 2 = 'light'
// 3 = 'hero'
// 4 = 'dark-hero'
// example: go run goscripts/coolorsToTailwind.go https://coolors.co/faa275-ff8c61-ce6a85-985277-5c374c 4 3 0 1 2

func main() {
	linkstr := os.Args[1]
	str := strings.ReplaceAll(linkstr, "https://coolors.co/", "")
	strarr := strings.Split(str, "-")
	if len(os.Args) > 2 {
		var temparr [5]string
		for i := 0; i < len(strarr); i++ {
			val, err := strconv.Atoi(os.Args[i+2])
			if err != nil {
				fmt.Println(err.Error())
				return
			}
			temparr[i] = strarr[val]
		}
		copy(strarr, temparr[:])
	}
	fmt.Printf("'background': '#%s', 'dark': '#%s', 'light': '#%s', 'hero' : '#%s', 'dark-hero': '#%s',", strarr[0], strarr[1], strarr[2], strarr[3], strarr[4])
}