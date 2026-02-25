/**
 * Truncate string to maxLen. Complexity: O(n).
 * @param {string} str
 * @param {number} maxLen
 * @returns {string}
 */
function truncate(str, maxLen) {
  if (typeof str !== 'string') return '';
  if (maxLen <= 0) return '';
  return str.length <= maxLen ? str : str.slice(0, maxLen);
}

module.exports = truncate;
