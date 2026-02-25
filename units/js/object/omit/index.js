/**
 * Omit given keys from object. Complexity: O(n).
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object}
 */
function omit(obj, keys) {
  if (obj == null || typeof obj !== 'object') return {};
  if (!Array.isArray(keys)) return { ...obj };
  const set = new Set(keys);
  const out = {};
  for (const k of Object.keys(obj)) {
    if (!set.has(k)) out[k] = obj[k];
  }
  return out;
}

module.exports = omit;
