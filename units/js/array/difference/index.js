/**
 * Elements in a that are not in b. Complexity: O(n+m).
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
function difference(a, b) {
  if (!Array.isArray(a)) return [];
  if (!Array.isArray(b)) return a.slice();
  const set = new Set(b);
  const out = [];
  for (let i = 0; i < a.length; i++) {
    if (!set.has(a[i])) out.push(a[i]);
  }
  return out;
}

module.exports = difference;
