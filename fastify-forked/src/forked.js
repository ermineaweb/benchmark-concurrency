const checkIfPrime = require("./isPrime");

// listen for messages from the parent process
module.exports = process.on("message", (message) => {
  let isPrime = checkIfPrime(message);
  // send the results back to the parent process
  process.send(isPrime);
  // kill the child process
  process.exit();
});
