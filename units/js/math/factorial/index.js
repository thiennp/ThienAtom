/**
 * Returns n! (factorial): product of integers 1..n. Definition: 0! = 1; n! = n * (n-1)! for n ≥ 1.
 * Complexity: O(n).
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

module.exports = factorial;
