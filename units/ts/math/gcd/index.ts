/**
 * GCD via Euclidean algorithm. Complexity: O(log min(a,b)).
 */
export function gcd(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) return NaN;
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}
