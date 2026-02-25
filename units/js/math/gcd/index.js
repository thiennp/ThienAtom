/**
 * Greatest common divisor of two integers via Euclidean algorithm.
 * Definition: gcd(a,0)=|a|; gcd(a,b)=gcd(b, a mod b). Complexity: O(log min(a,b)).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) return NaN;
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

module.exports = gcd;
