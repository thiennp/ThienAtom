/**
 * Pick only given keys from object. Complexity: O(k).
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object}
 */
function pick(obj, keys) {
  if (obj == null || typeof obj !== 'object') return {};
  if (!Array.isArray(keys)) return {};
  const out = {};
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (Object.prototype.hasOwnProperty.call(obj, k)) out[k] = obj[k];
  }
  return out;
}

module.exports = pick;
