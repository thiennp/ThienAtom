/**
 * Range of numbers [start, end) with optional step. Complexity: O(n).
 * @param {number} start
 * @param {number} [end]
 * @param {number} [step=1]
 * @returns {number[]}
 */
function range(start, end, step) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  step = step === undefined ? 1 : step;
  const out = [];
  if (step > 0) for (let i = start; i < end; i += step) out.push(i);
  else if (step < 0) for (let i = start; i > end; i += step) out.push(i);
  return out;
}

module.exports = range;
