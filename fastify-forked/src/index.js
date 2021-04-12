const childProcess = require("child_process");
const fastify = require("fastify");

const app = fastify();

app.get("/no_process", (request, reply) => {
  return reply.send("it work");
});

app.get("/heavy_process", (request, reply) => {
  // create the child process
  const forked_child_process = childProcess.fork("./src/forked.js");
  // send message to the child process
  forked_child_process.send(12345678);
  // listen for a response from the child process
  forked_child_process.on("message", (isPrime) => {
    return reply.send(isPrime.toString());
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`Server started on 3000`);
});
