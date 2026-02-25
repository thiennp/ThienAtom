/**
 * Minimum of array of numbers. Complexity: O(n).
 * @param {number[]} arr
 * @returns {number}
 */
function arrayMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return Infinity;
  let m = Number(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const v = Number(arr[i]);
    if (v < m) m = v;
  }
  return m;
}

module.exports = arrayMin;
