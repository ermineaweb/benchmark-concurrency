const http = require("http");
const checkIfPrime = require("./isPrime");

const number = 12345678;

http
  .createServer((req, res) => {
    const isPrime = checkIfPrime(number);
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end(isPrime.toString());
  })
  .listen(3000, "0.0.0.0", () => {
    console.log("Server started on 3000");
  });
