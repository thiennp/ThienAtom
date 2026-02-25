/**
 * Rounds n to `digits` decimal places. Complexity: O(1).
 * @param {number} n
 * @param {number} digits
 * @returns {number}
 */
function roundDecimal(n, digits) {
  const p = Math.pow(10, digits);
  return Math.round(n * p) / p;
}

module.exports = roundDecimal;
