/**
 * Reject if promise does not settle within ms. Complexity: O(1).
 * @param {Promise} promise
 * @param {number} ms
 * @returns {Promise}
 */
function timeoutWrap(promise, ms) {
  return new Promise(function (resolve, reject) {
    const t = setTimeout(function () {
      reject(new Error('Timeout'));
    }, ms);
    promise.then(
      function (v) {
        clearTimeout(t);
        resolve(v);
      },
      function (e) {
        clearTimeout(t);
        reject(e);
      }
    );
  });
}

module.exports = timeoutWrap;
