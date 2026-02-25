const isPrime = require('./index.js');

function assert(cond, msg) {
  if (!cond) throw new Error(msg || 'Assertion failed');
}

assert(isPrime(2) === true);
assert(isPrime(3) === true);
assert(isPrime(5) === true);
assert(isPrime(7) === true);
assert(isPrime(11) === true);
assert(isPrime(1) === false);
assert(isPrime(0) === false);
assert(isPrime(4) === false);
assert(isPrime(6) === false);
assert(isPrime(9) === false);
assert(isPrime(-1) === false);
assert(isPrime(2.5) === false);

console.log('is-prime tests passed');
