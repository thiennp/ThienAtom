/**
 * Type guard: true if value is array. Complexity: O(1).
 */
export function isArray(x: unknown): x is unknown[] {
  return Array.isArray(x);
}
