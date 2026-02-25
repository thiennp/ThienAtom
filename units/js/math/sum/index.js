/**
 * Sum of array elements. Complexity: O(n).
 * @param {number[]} arr
 * @returns {number}
 */
function sum(arr) {
  if (!Array.isArray(arr)) return NaN;
  let s = 0;
  for (let i = 0; i < arr.length; i++) s += Number(arr[i]);
  return s;
}

module.exports = sum;
