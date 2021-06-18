package main

import (
	"net/http"
	"strconv"

	echo "github.com/labstack/echo/v4"
)

func noProcess(c echo.Context) error {
	return c.String(http.StatusOK, "it work")
}

func withProcess(c echo.Context) error {
	res := strconv.FormatBool(isPrime(12345678))
	return c.String(http.StatusOK, res)
}

func main() {
	e := echo.New()
	e.GET("/no_process", noProcess)
	e.GET("/heavy_process", withProcess)
	e.Logger.Fatal(e.Start(":3000"))
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
