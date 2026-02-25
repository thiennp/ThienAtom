/**
 * Type guard: true if value is null or undefined. Complexity: O(1).
 * Use to narrow T | null | undefined to T.
 */
export function isNil(x: unknown): x is null | undefined {
  return x == null;
}
