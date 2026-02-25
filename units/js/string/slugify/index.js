/**
 * Converts string to URL-safe slug. Complexity: O(n).
 * @param {string} str
 * @returns {string}
 */
function slugify(str) {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

module.exports = slugify;
