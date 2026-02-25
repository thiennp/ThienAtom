/**
 * First non-null/undefined argument. Complexity: O(k).
 */
export function coalesce<T>(...args: (T | null | undefined)[]): T | undefined {
  for (let i = 0; i < args.length; i++) {
    if (args[i] != null) return args[i] as T;
  }
  return undefined;
}
