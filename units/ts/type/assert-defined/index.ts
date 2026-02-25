/**
 * Assertion: throws if value is null or undefined. Complexity: O(1).
 * Narrows T | null | undefined to T for the remainder of scope.
 */
export function assertDefined<T>(x: T | null | undefined, msg?: string): asserts x is T {
  if (x == null) throw new Error(msg ?? 'Expected value to be defined');
}
