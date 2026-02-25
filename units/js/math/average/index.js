/**
 * Arithmetic mean of array. Complexity: O(n).
 * @param {number[]} arr
 * @returns {number}
 */
function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return NaN;
  let s = 0;
  for (let i = 0; i < arr.length; i++) s += Number(arr[i]);
  return s / arr.length;
}

module.exports = average;
