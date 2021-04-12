const fastify = require("fastify");
const checkIfPrime = require("./isPrime");

const app = fastify();

app.get("/no_process", (request, reply) => {
  return reply.send("it work");
});

app.get("/heavy_process", (request, reply) => {
  const isPrime = checkIfPrime(12345678);
  return reply.send(isPrime.toString());
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`Server started on 3000`);
});
