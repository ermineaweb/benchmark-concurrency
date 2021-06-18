package main

import (
	"strconv"

	"github.com/gin-gonic/gin"
)

func noProcess(c *gin.Context) {
	c.JSON(200, gin.H{"message": "it work"})
}

func withProcess(c *gin.Context) {
	c.JSON(200, gin.H{"message": strconv.FormatBool(isPrime(12345678))})
}

func main() {
	r := gin.Default()
	r.GET("/no_process", noProcess)
	r.GET("/heavy_process", withProcess)
	r.Run(":3000")
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
