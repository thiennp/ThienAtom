/**
 * Repeat string n times. Complexity: O(n*count).
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */
function repeat(str, n) {
  if (typeof str !== 'string' || n < 0 || !Number.isInteger(n)) return '';
  if (n === 0) return '';
  return str.repeat(n);
}

module.exports = repeat;
