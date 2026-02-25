/**
 * Type guard: plain object (not null, array, or class instance). Complexity: O(1).
 */
export function isPlainObject(x: unknown): x is Record<string, unknown> {
  if (x == null || typeof x !== 'object') return false;
  const proto = Object.getPrototypeOf(x);
  return proto === null || proto === Object.prototype;
}
