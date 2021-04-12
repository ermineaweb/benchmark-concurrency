const express = require("express");
const checkIfPrime = require("./isPrime");

const app = express();

app.get("/no_process", (req, res) => {
  return res.status(200).send("it work");
});

app.get("/heavy_process", (req, res) => {
  const isPrime = checkIfPrime(12345678);
  return res.status(200).send(isPrime);
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
