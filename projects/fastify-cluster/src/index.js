const os = require("os");
const cluster = require("cluster");
const checkIfPrime = require("./isPrime");
const numCpus = os.cpus().length;
const fastify = require("fastify");

const app = fastify();

app.get("/no_process", (request, reply) => {
  return reply.send("it work");
});

app.get("/heavy_process", (request, reply) => {
  const isPrime = checkIfPrime(12345678);
  return reply.send(isPrime.toString());
});

if (cluster.isMaster) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  app.listen(3000, "0.0.0.0", () => {
    console.log(`Server started on 3000`);
  });
}
