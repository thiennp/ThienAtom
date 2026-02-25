/**
 * True if n in [start, end) or [start, start+end) when end omitted. Complexity: O(1).
 * @param {number} n
 * @param {number} start
 * @param {number} [end]
 * @returns {boolean}
 */
function inRange(n, start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return n >= start && n < end;
}

module.exports = inRange;
