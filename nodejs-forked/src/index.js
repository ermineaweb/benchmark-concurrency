const childProcess = require("child_process");
const http = require("http");

const number = 12345678;

http
  .createServer((req, res) => {
    // create the child process
    const forked_child_process = childProcess.fork("./src/forked.js");
    // send message to the child process
    forked_child_process.send(number);
    // listen for a response from the child process
    forked_child_process.on("message", (isPrime) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end(isPrime.toString());
    });
  })
  .listen(3000, "0.0.0.0", () => {
    console.log("Server started on 3000");
  });
