/**
 * Chunk array into groups of size. Complexity: O(n).
 * @param {Array} arr
 * @param {number} size
 * @returns {Array[]}
 */
function chunk(arr, size) {
  if (!Array.isArray(arr) || size < 1) return [];
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

module.exports = chunk;
