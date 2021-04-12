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

func withProcess(in chan int, out chan bool) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		in <- 12345678
		result := <-out
		fmt.Fprint(w, strconv.FormatBool(result))
	}
}

func worker(id int, in <-chan int, out chan<- bool) {
	for {
		inValue := <-in
		outValue := isPrime(inValue)
		out <- outValue
	}
}

func pool(workers int) (chan int, chan bool) {
	in := make(chan int)
	out := make(chan bool)

	for i := 0; i < workers; i++ {
		go worker(i, in, out)
	}

	return in, out
}

func main() {
	http.HandleFunc("/no_process", noProcess)
	in, out := pool(4)
	http.HandleFunc("/heavy_process", withProcess(in, out))

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
