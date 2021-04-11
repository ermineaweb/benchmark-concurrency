const childProcess = require("child_process");
const express = require("express");

const app = express();

const number = 0;

// route with child processes
app.get("/", (req, res) => {
  // create the child process
  const forked_child_process = childProcess.fork("./src/forked.js");
  // send message to the child process
  forked_child_process.send(number);
  // listen for a response from the child process
  forked_child_process.on("message", (isPrime) => {
    return res.send(isPrime);
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
