/**
 * Omit given keys. Complexity: O(n). Preserves remaining key types.
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  if (obj == null || typeof obj !== 'object') return {} as Omit<T, K>;
  const set = new Set(keys);
  const out = {} as Omit<T, K>;
  for (const k of Object.keys(obj) as K[]) {
    if (!set.has(k)) (out as Record<string, unknown>)[k as string] = obj[k];
  }
  return out;
}
