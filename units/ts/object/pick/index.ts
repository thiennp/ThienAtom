/**
 * Pick only given keys. Complexity: O(k). Preserves key types.
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  if (obj == null || typeof obj !== 'object') return {} as Pick<T, K>;
  const out = {} as Pick<T, K>;
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (Object.prototype.hasOwnProperty.call(obj, k)) (out as Record<string, unknown>)[k as string] = obj[k];
  }
  return out;
}
