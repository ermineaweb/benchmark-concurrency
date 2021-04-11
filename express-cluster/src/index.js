const express = require("express");
const http = require("http");
const os = require("os");
const cluster = require("cluster");
const checkIfPrime = require("./isPrime");
const numCpus = os.cpus().length;

const app = express();

const number = 12345678;

app.get("/", (req, res) => {
  const isPrime = checkIfPrime(number);
  return res.send(isPrime);
});

if (cluster.isMaster) {
  // create workers
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  app.listen(3000, "0.0.0.0", () => {
    console.log(`worker ${process.pid} started`);
  });
}
