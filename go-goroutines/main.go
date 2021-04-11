package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
)

var jobs chan int

func worker(jobs <-chan int) {
	fmt.Println("Register the worker")
	for i := range jobs {
		fmt.Println("worker processing job", i)
	}
}

func handler(w http.ResponseWriter, r *http.Request) {
	jobs <- 1
	fmt.Fprint(w, strconv.FormatBool(isPrime(0)))
}

func main() {
	jobs = make(chan int, 100)
	go worker(jobs)
	http.HandleFunc("/", handler)
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
