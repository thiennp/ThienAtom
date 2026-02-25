/**
 * True if value is null or undefined. Complexity: O(1).
 * @param {*} x
 * @returns {boolean}
 */
function isNil(x) {
  return x == null;
}

module.exports = isNil;
