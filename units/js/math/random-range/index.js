/**
 * Random number in [min, max). Complexity: O(1).
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

module.exports = randomRange;
