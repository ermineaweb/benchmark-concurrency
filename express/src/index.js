const express = require("express");
const checkIfPrime = require("./isPrime");

const app = express();

const number = 12345678;

// route without child process
app.get("/prime", (req, res) => {
  const isPrime = checkIfPrime(number);
  return res.send(isPrime);
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
