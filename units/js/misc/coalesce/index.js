/**
 * First non-null/undefined argument. Complexity: O(k).
 * @param {...*} args
 * @returns {*}
 */
function coalesce() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] != null) return arguments[i];
  }
  return undefined;
}

module.exports = coalesce;
