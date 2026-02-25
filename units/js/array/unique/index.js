/**
 * Unique values (first occurrence). Complexity: O(n).
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

module.exports = unique;
