/**
 * Returns true iff n is a prime number (integer ≥ 2 with no divisors other than 1 and itself).
 * Complexity: O(sqrt(n)) — trial division up to sqrt(n).
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}

module.exports = isPrime;
