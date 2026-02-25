/**
 * Promise that resolves after ms ms. Complexity: O(1).
 * @param {number} ms
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

module.exports = sleep;
