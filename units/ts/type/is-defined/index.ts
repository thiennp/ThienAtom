/**
 * Type guard: true if value is not null or undefined. Complexity: O(1).
 * Use in filter() to narrow (T | null | undefined)[] to T[].
 */
export function isDefined<T>(x: T | null | undefined): x is T {
  return x != null;
}
