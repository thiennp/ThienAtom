/**
 * Clamps n to [min, max]. Complexity: O(1).
 * @param {number} n
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(n, min, max) {
  if (n < min) return min;
  if (n > max) return max;
  return n;
}

module.exports = clamp;
