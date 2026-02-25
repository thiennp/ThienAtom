/**
 * Flatten one level. Complexity: O(n).
 * @param {Array} arr
 * @returns {Array}
 */
function flattenShallow(arr) {
  if (!Array.isArray(arr)) return [];
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    if (Array.isArray(x)) for (let j = 0; j < x.length; j++) out.push(x[j]);
    else out.push(x);
  }
  return out;
}

module.exports = flattenShallow;
