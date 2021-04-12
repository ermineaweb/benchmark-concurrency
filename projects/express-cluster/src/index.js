const express = require("express");
const os = require("os");
const cluster = require("cluster");
const checkIfPrime = require("./isPrime");
const numCpus = os.cpus().length;

const app = express();

app.get("/no_process", (req, res) => {
  return res.status(200).send("it work");
});

app.get("/heavy_process", (req, res) => {
  const isPrime = checkIfPrime(12345678);
  return res.status(200).send(isPrime);
});

if (cluster.isMaster) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  app.listen(3000, () => {
    console.log(`worker ${process.pid} started`);
  });
}
