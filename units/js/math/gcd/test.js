const gcd = require('./index.js');

function assert(cond, msg) {
  if (!cond) throw new Error(msg || 'Assertion failed');
}

assert(gcd(48, 18) === 6);
assert(gcd(100, 35) === 5);
assert(gcd(17, 19) === 1);
assert(gcd(0, 7) === 7);
assert(gcd(7, 0) === 7);
assert(gcd(0, 0) === 0);
assert(gcd(-12, 8) === 4);

console.log('gcd tests passed');
