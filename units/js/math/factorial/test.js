const factorial = require('./index.js');

function assert(cond, msg) {
  if (!cond) throw new Error(msg || 'Assertion failed');
}

assert(factorial(0) === 1);
assert(factorial(1) === 1);
assert(factorial(2) === 2);
assert(factorial(5) === 120);
assert(factorial(6) === 720);
assert(Number.isNaN(factorial(-1)));
assert(Number.isNaN(factorial(1.5)));

console.log('factorial tests passed');
