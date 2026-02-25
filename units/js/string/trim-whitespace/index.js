/**
 * Trim leading/trailing whitespace. Complexity: O(n).
 * @param {string} str
 * @returns {string}
 */
function trimWhitespace(str) {
  if (typeof str !== 'string') return '';
  return str.trim();
}

module.exports = trimWhitespace;
