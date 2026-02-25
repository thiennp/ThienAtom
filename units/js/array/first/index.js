/**
 * First element of array. Complexity: O(1).
 * @param {Array} arr
 * @returns {*}
 */
function first(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr[0];
}

module.exports = first;
