/**
 * URL-safe slug. Complexity: O(n).
 */
export function slugify(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}
