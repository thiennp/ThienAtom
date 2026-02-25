/**
 * First char uppercase, rest lowercase. Complexity: O(n).
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = capitalize;
