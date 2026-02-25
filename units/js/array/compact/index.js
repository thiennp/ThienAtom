/**
 * Remove falsy values. Complexity: O(n).
 * @param {Array} arr
 * @returns {Array}
 */
function compact(arr) {
  if (!Array.isArray(arr)) return [];
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) out.push(arr[i]);
  }
  return out;
}

module.exports = compact;
