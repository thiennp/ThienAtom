/**
 * Simple URL format check (http/https). Complexity: O(n).
 * @param {string} str
 * @returns {boolean}
 */
function isUrl(str) {
  if (typeof str !== 'string') return false;
  return /^https?:\/\/[^\s]+$/i.test(str.trim());
}

module.exports = isUrl;
