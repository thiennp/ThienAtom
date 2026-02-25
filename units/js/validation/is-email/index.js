/**
 * Simple email format check (local@domain.tld). Complexity: O(n).
 * @param {string} str
 * @returns {boolean}
 */
function isEmail(str) {
  if (typeof str !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());
}

module.exports = isEmail;
