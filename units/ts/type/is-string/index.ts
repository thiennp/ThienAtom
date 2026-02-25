/**
 * Type guard: true if value is string. Complexity: O(1).
 */
export function isString(x: unknown): x is string {
  return typeof x === 'string';
}
