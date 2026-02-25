/**
 * Last element. Complexity: O(1).
 */
export function last<T>(arr: T[]): T | undefined {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr[arr.length - 1];
}
