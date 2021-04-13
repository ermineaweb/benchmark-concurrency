function checkIfPrime(number) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  return isPrime && number > 1;
}

module.exports = checkIfPrime;
