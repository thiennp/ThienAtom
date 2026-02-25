/**
 * Debounce: invoke fn only after ms have passed since last call. Complexity: O(1) per call.
 * @param {Function} fn
 * @param {number} ms
 * @returns {Function}
 */
function debounce(fn, ms) {
  let t = null;
  return function () {
    const args = arguments;
    const self = this;
    if (t) clearTimeout(t);
    t = setTimeout(function () {
      t = null;
      fn.apply(self, args);
    }, ms);
  };
}

module.exports = debounce;
