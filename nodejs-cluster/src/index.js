const http = require("http");
const os = require("os");
const cluster = require("cluster");
const checkIfPrime = require("./isPrime");
const numCpus = os.cpus().length;

const number = 0;

if (cluster.isMaster) {
  // create workers
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      const isPrime = checkIfPrime(number);
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end(isPrime.toString());
    })
    .listen(3000, "0.0.0.0", () => {
      console.log(`worker ${process.pid} started`);
    });
}
