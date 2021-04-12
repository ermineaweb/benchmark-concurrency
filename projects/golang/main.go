package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
)

func noProcess(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "it work")
}

func withProcess(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, strconv.FormatBool(isPrime(12345678)))
}

func main() {
	http.HandleFunc("/no_process", noProcess)
	http.HandleFunc("/heavy_process", withProcess)
	fmt.Println("Server started on port 3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func isPrime(number int) bool {
	isPrime := true
	for i := 2; i < number; i++ {
		if number%i == 0 {
			isPrime = false
		}
	}
	return isPrime && number > 1
}
