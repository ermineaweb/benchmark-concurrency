package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func noProcess(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Fprint(w, "it work")
}

func withProcess(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Fprint(w, strconv.FormatBool(isPrime(12345678)))
}

func main() {
	router := httprouter.New()
	router.GET("/no_process", noProcess)
	router.GET("/heavy_process", withProcess)
	log.Fatal(http.ListenAndServe(":3000", router))
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
