/**
 * True if n is an even integer. Complexity: O(1).
 * @param {number} n
 * @returns {boolean}
 */
function isEven(n) {
  return Number.isInteger(n) && n % 2 === 0;
}

module.exports = isEven;
