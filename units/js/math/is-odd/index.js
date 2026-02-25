/**
 * True if n is an odd integer. Complexity: O(1).
 * @param {number} n
 * @returns {boolean}
 */
function isOdd(n) {
  return Number.isInteger(n) && n % 2 !== 0;
}

module.exports = isOdd;
